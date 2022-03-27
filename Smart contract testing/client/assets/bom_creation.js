let ipfs;

document.addEventListener("DOMContentLoaded", init);

async function init(){
    ipfs = await Ipfs.create();
    await loadWeb3()
    await createTestAssets();
    //assetManagerC = await loadContract();
   // console.log(assetManagerC)
}

async function createTestAssets(){
    await fetch("../test_metadata/main_installation.json")
        .then(resp => resp.json())
        .then(resp => addAssetToIpfs(resp, "main installation"));
    
    await fetch("../test_metadata/battery.json")
        .then(resp => resp.json())
        .then(resp => addAssetToIpfs(resp, "battery"));

    await fetch("../test_metadata/convertor.json")
        .then(resp => resp.json())
        .then(function(res){
            addAssetToIpfs(resp, "convertor");
        });

    
    //let mainInstallationC = await loadAssetContract("0xdfb2c2b408B613C4BC63EA605157598D0C1d2Ef2");
    //let batteryC = loadAssetContract("0x19cC966BBc270Ba437FcE5B830cA858C919dEAF6")
    //let convertorC = loadAssetContract("0xB0Fb9739019537308783565C360435557E9D3752")

    //mainInstallationC.methods.getIpfsAddress().call().then(resp => console.log(resp));
}

async function addAssetToIpfs(asset, nick){
    const cid  = await ipfs.add(JSON.stringify(asset));
    return await deployAssetContract(nick, cid.path)
}

