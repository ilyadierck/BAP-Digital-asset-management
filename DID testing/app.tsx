import * as React from 'preact';import * as ReactDOM from 'preact';
import { JWT } from '@ew-did-registry/jwt';
import {Resolver, ethrReg, Operator, EwSigner, VoltaAddress1056 } from '@ew-did-registry/did-ethr-resolver';
import { DIDDocumentFull, DIDDocumentLite, IDIDDocumentFactory } from '@ew-did-registry/did-document';
import { getDefaultProvider} from 'ethers';
import { AbiCoder } from '@ethersproject/abi';
import { Provider } from '@ethersproject/abstract-provider';
import { ProviderTypes } from '@ew-did-registry/did-resolver-interface';
import { RegistrySettings } from '@ew-did-registry/did-resolver-interface';
import { Keys } from '@ew-did-registry/keys';
import { Methods } from '@ew-did-registry/did';
import DIDRegistry from '@ew-did-registry/did-registry';
import { DidStore } from '@ew-did-registry/did-ipfs-store';
import { DIDAttribute, IUpdateData, PubKeyType, IAttributePayload, Algorithms, Encoding} from '@ew-did-registry/did-resolver-interface';
  import { IClaimsUser } from '@ew-did-registry/claims';
import ipfsClient from 'ipfs-http-client';

const ipfsUrl = '/ip4/127.0.0.1/tcp/5001';

const NETWORK_URL = 'https://volta-rpc.energyweb.org/';

const provider = getDefaultProvider(NETWORK_URL, ProviderTypes.HTTP)

const providerSettings = {
    type: ProviderTypes.HTTP,
    uriOrInfo: NETWORK_URL,
};

// construct the IResolverSettings
const resolverSettings: RegistrySettings = {
    address: VoltaAddress1056
};

const resolver = new Resolver(provider, resolverSettings)


async function createDID(ownerAddress: string){

    const registrySettings = { 
        method: Methods.Erc1056,
        abi: ethrReg.abi,
        address: VoltaAddress1056
    };

    const providerSettings = {
        type: ProviderTypes.HTTP,
        uriOrInfo: 'https://volta-rpc.energyweb.org/',
      }
    
    const userKeys = new Keys({
      privateKey: '42f9eb48de908412da91f0e7b6d8f987db91cbf7bf2639c53394b746d91d2382',
      publicKey: '0391feb03b9fadd2dfb9dfe7d3c53cd4a64094bd7ffd19beb8c46efbeaf2724f32',
    });

    // Create user DID
    const userDid = `did:${Methods.Erc1056}:${ownerAddress}` ;
    const signer = EwSigner.fromPrivateKey(userKeys.privateKey, providerSettings);
    const userOperator = new Operator(signer, resolverSettings)
    await userOperator.create();
    
    // Create user claim
    let store = new DidStore(ipfsUrl)
    const user = new DIDRegistry(userKeys, userDid, userOperator, store, providerSettings);
    const userClaims: IClaimsUser = user.claims.createClaimsUser();
    const claimData = {
      name: 'Tesla Model 3',
      capacity: '10',
      price: '500',
    }; 
    const token = await userClaims.createPublicClaim(claimData);

    // Create verifier DID
    const verifierKeys = new Keys({
      privateKey: '37cd773efb8cd99b0f509ec118df8e9c6d6e5e22b214012a76be215f77250b9e',
      publicKey: '02335325b9d16aa046ea7275537d9aced84ed3683a7969db5f836b0e6d62770d1e',
    }); 
    const verifierAddress = '0x6C30b191A96EeE014Eb06227D50e9FB3CeAbeafd'; 
    const verifierDid = `did:${Methods.Erc1056}:${verifierAddress}` ; 
    const verifierSigner = EwSigner.fromPrivateKey(verifierKeys.privateKey, providerSettings);
    const verifierOperator = new Operator(verifierSigner, resolverSettings);
    const verifier = new DIDRegistry(verifierKeys, verifierDid, verifierOperator, new DidStore(ipfsUrl), providerSettings); 

    // Create Issuer DID
    const issuerKeys = new Keys({
      privateKey: '945d90baf66123693be97edff663d5c54f5d517d40928a9c0caa37dba3a0b042',
      publicKey: '0232c391f52ff6c63e1ffdfa6921822aee895d2a21bb28a71370404b05960c9263',
    }); 
    const issuerAddress = '0xddCe879DE01391176a8527681f63A7D3FCA2901B'; 
    const issuerDid = `did:${Methods.Erc1056}:${issuerAddress}` ; 
    const issuerSigner = EwSigner.fromPrivateKey(issuerKeys.privateKey, providerSettings);
    const issuerOperator = new Operator(issuerSigner, resolverSettings);
    const issuer = new DIDRegistry(issuerKeys, issuerDid, issuerOperator, new DidStore(ipfsUrl), providerSettings); 
    const issuerClaims = issuer.claims.createClaimsIssuer();

    //Issuer issues claim tot user
    const issuedToken = await issuerClaims.issuePublicClaim(token);

    // Add issuer as user delegate
  
    // Verify claim
    const verified = await userClaims.verifyPublicClaim(issuedToken, claimData); 
    console.log("verified: " + verified);

    //const userLightDoc = user.document.read(userDid);

    return user.document.read(userDid)
}

createDID('0xF4Ded1E06a7A8a25D9aD2E3e1953cFFDbBb00e41').then(res => console.log(res))