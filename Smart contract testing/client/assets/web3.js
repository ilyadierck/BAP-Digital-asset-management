let web3;

async function loadContract() {
    let abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "assetDid",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "parent",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "children",
                    "type": "address[]"
                }
            ],
            "name": "addAsset",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "assetDid",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "children",
                    "type": "address[]"
                }
            ],
            "name": "addAsset",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "assetDid",
                    "type": "address"
                }
            ],
            "name": "getAsset",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "did",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "parent",
                            "type": "address"
                        },
                        {
                            "internalType": "address[]",
                            "name": "children",
                            "type": "address[]"
                        },
                        {
                            "internalType": "bool",
                            "name": "active",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Asset",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    return assetManagerContract = new web3.eth.Contract(abi, "0xd9145CCE52D386f254917e481eB44e9943F39138");
}

async function loadAssetContract(contractUrl) {
    let abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "ipfsUrl",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "nick",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "getDid",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getIpfsAddress",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNickname",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getOwner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    
    let bytecode = {
        "functionDebugData": {
            "@_35": {
                "entryPoint": null,
                "id": 35,
                "parameterSlots": 2,
                "returnSlots": 0
            },
            "abi_decode_available_length_t_string_memory_ptr_fromMemory": {
                "entryPoint": 705,
                "id": null,
                "parameterSlots": 3,
                "returnSlots": 1
            },
            "abi_decode_t_string_memory_ptr_fromMemory": {
                "entryPoint": 780,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory": {
                "entryPoint": 831,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 2
            },
            "allocate_memory": {
                "entryPoint": 566,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "allocate_unbounded": {
                "entryPoint": 418,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 1
            },
            "array_allocation_size_t_string_memory_ptr": {
                "entryPoint": 597,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "copy_memory_to_memory": {
                "entryPoint": 651,
                "id": null,
                "parameterSlots": 3,
                "returnSlots": 0
            },
            "extract_byte_array_length": {
                "entryPoint": 1011,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "finalize_allocation": {
                "entryPoint": 512,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 0
            },
            "panic_error_0x22": {
                "entryPoint": 964,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "panic_error_0x41": {
                "entryPoint": 465,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
                "entryPoint": 438,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae": {
                "entryPoint": 443,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
                "entryPoint": 433,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
                "entryPoint": 428,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "round_up_to_mul_of_32": {
                "entryPoint": 448,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            }
        },
        "generatedSources": [
            {
                "ast": {
                    "nodeType": "YulBlock",
                    "src": "0:4093:1",
                    "statements": [
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "47:35:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "57:19:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "73:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "67:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "67:9:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "memPtr",
                                                "nodeType": "YulIdentifier",
                                                "src": "57:6:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "allocate_unbounded",
                            "nodeType": "YulFunctionDefinition",
                            "returnVariables": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "40:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "7:75:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "177:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "194:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "197:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "187:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "187:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "187:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulFunctionDefinition",
                            "src": "88:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "300:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "317:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "320:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "310:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "310:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "310:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                            "nodeType": "YulFunctionDefinition",
                            "src": "211:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "423:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "440:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "443:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "433:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "433:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "433:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulFunctionDefinition",
                            "src": "334:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "546:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "563:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "566:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "556:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "556:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "556:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulFunctionDefinition",
                            "src": "457:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "628:54:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "638:38:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "656:5:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "663:2:1",
                                                            "type": "",
                                                            "value": "31"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "652:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "652:14:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "672:2:1",
                                                            "type": "",
                                                            "value": "31"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "not",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "668:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "668:7:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "648:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "648:28:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "result",
                                                "nodeType": "YulIdentifier",
                                                "src": "638:6:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "611:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "result",
                                    "nodeType": "YulTypedName",
                                    "src": "621:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "580:102:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "716:152:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "733:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "736:77:1",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "726:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "726:88:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "726:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "830:1:1",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "833:4:1",
                                                    "type": "",
                                                    "value": "0x41"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "823:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "823:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "823:15:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "854:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "857:4:1",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "847:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "847:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "847:15:1"
                                    }
                                ]
                            },
                            "name": "panic_error_0x41",
                            "nodeType": "YulFunctionDefinition",
                            "src": "688:180:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "917:238:1",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "927:58:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "memPtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "949:6:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "size",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "979:4:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "round_up_to_mul_of_32",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "957:21:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "957:27:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "945:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "945:40:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "newFreePtr",
                                                "nodeType": "YulTypedName",
                                                "src": "931:10:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1096:22:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x41",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1098:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1098:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1098:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "newFreePtr",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1039:10:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1051:18:1",
                                                            "type": "",
                                                            "value": "0xffffffffffffffff"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "gt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1036:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1036:34:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "newFreePtr",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1075:10:1"
                                                        },
                                                        {
                                                            "name": "memPtr",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1087:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "lt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1072:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1072:22:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "or",
                                                "nodeType": "YulIdentifier",
                                                "src": "1033:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1033:62:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1030:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1134:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                },
                                                {
                                                    "name": "newFreePtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1138:10:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "1127:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1127:22:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1127:22:1"
                                    }
                                ]
                            },
                            "name": "finalize_allocation",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "903:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "size",
                                    "nodeType": "YulTypedName",
                                    "src": "911:4:1",
                                    "type": ""
                                }
                            ],
                            "src": "874:281:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1202:88:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1212:30:1",
                                        "value": {
                                            "arguments": [],
                                            "functionName": {
                                                "name": "allocate_unbounded",
                                                "nodeType": "YulIdentifier",
                                                "src": "1222:18:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1222:20:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "memPtr",
                                                "nodeType": "YulIdentifier",
                                                "src": "1212:6:1"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "memPtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1271:6:1"
                                                },
                                                {
                                                    "name": "size",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1279:4:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "finalize_allocation",
                                                "nodeType": "YulIdentifier",
                                                "src": "1251:19:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1251:33:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1251:33:1"
                                    }
                                ]
                            },
                            "name": "allocate_memory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "size",
                                    "nodeType": "YulTypedName",
                                    "src": "1186:4:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "1195:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "1161:129:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1363:241:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1468:22:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x41",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1470:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1470:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1470:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1440:6:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1448:18:1",
                                                    "type": "",
                                                    "value": "0xffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "1437:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1437:30:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1434:56:1"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1500:37:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1530:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "round_up_to_mul_of_32",
                                                "nodeType": "YulIdentifier",
                                                "src": "1508:21:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1508:29:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "size",
                                                "nodeType": "YulIdentifier",
                                                "src": "1500:4:1"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1574:23:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "size",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1586:4:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1592:4:1",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "1582:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1582:15:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "size",
                                                "nodeType": "YulIdentifier",
                                                "src": "1574:4:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "array_allocation_size_t_string_memory_ptr",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "length",
                                    "nodeType": "YulTypedName",
                                    "src": "1347:6:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "size",
                                    "nodeType": "YulTypedName",
                                    "src": "1358:4:1",
                                    "type": ""
                                }
                            ],
                            "src": "1296:308:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1659:258:1",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "1669:10:1",
                                        "value": {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "1678:1:1",
                                            "type": "",
                                            "value": "0"
                                        },
                                        "variables": [
                                            {
                                                "name": "i",
                                                "nodeType": "YulTypedName",
                                                "src": "1673:1:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1738:63:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "dst",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1763:3:1"
                                                                    },
                                                                    {
                                                                        "name": "i",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1768:1:1"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "add",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1759:3:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1759:11:1"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "src",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "1782:3:1"
                                                                            },
                                                                            {
                                                                                "name": "i",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "1787:1:1"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "add",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "1778:3:1"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "1778:11:1"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1772:5:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1772:18:1"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "mstore",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1752:6:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1752:39:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1752:39:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "i",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1699:1:1"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1702:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "lt",
                                                "nodeType": "YulIdentifier",
                                                "src": "1696:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1696:13:1"
                                        },
                                        "nodeType": "YulForLoop",
                                        "post": {
                                            "nodeType": "YulBlock",
                                            "src": "1710:19:1",
                                            "statements": [
                                                {
                                                    "nodeType": "YulAssignment",
                                                    "src": "1712:15:1",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "i",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1721:1:1"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1724:2:1",
                                                                "type": "",
                                                                "value": "32"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1717:3:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1717:10:1"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "i",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1712:1:1"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "pre": {
                                            "nodeType": "YulBlock",
                                            "src": "1692:3:1",
                                            "statements": []
                                        },
                                        "src": "1688:113:1"
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1835:76:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "dst",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1885:3:1"
                                                                    },
                                                                    {
                                                                        "name": "length",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1890:6:1"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "add",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1881:3:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1881:16:1"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1899:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "mstore",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1874:6:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1874:27:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1874:27:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "i",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1816:1:1"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1819:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "1813:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1813:13:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1810:101:1"
                                    }
                                ]
                            },
                            "name": "copy_memory_to_memory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "src",
                                    "nodeType": "YulTypedName",
                                    "src": "1641:3:1",
                                    "type": ""
                                },
                                {
                                    "name": "dst",
                                    "nodeType": "YulTypedName",
                                    "src": "1646:3:1",
                                    "type": ""
                                },
                                {
                                    "name": "length",
                                    "nodeType": "YulTypedName",
                                    "src": "1651:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "1610:307:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "2018:326:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2028:75:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "length",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2095:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "array_allocation_size_t_string_memory_ptr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2053:41:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2053:49:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "allocate_memory",
                                                "nodeType": "YulIdentifier",
                                                "src": "2037:15:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2037:66:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "array",
                                                "nodeType": "YulIdentifier",
                                                "src": "2028:5:1"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "array",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2119:5:1"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2126:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "2112:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2112:21:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2112:21:1"
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2142:27:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "array",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2157:5:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2164:4:1",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2153:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2153:16:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "dst",
                                                "nodeType": "YulTypedName",
                                                "src": "2146:3:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "2207:83:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2209:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2209:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2209:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "src",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2188:3:1"
                                                        },
                                                        {
                                                            "name": "length",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2193:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2184:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2184:16:1"
                                                },
                                                {
                                                    "name": "end",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2202:3:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "2181:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2181:25:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "2178:112:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "src",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2321:3:1"
                                                },
                                                {
                                                    "name": "dst",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2326:3:1"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2331:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "copy_memory_to_memory",
                                                "nodeType": "YulIdentifier",
                                                "src": "2299:21:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2299:39:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2299:39:1"
                                    }
                                ]
                            },
                            "name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "src",
                                    "nodeType": "YulTypedName",
                                    "src": "1991:3:1",
                                    "type": ""
                                },
                                {
                                    "name": "length",
                                    "nodeType": "YulTypedName",
                                    "src": "1996:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "2004:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "array",
                                    "nodeType": "YulTypedName",
                                    "src": "2012:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "1923:421:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "2437:282:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "2486:83:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2488:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2488:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2488:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2465:6:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2473:4:1",
                                                                    "type": "",
                                                                    "value": "0x1f"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2461:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2461:17:1"
                                                        },
                                                        {
                                                            "name": "end",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2480:3:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "slt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2457:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2457:27:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nodeType": "YulIdentifier",
                                                "src": "2450:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2450:35:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "2447:122:1"
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2578:27:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2598:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "2592:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2592:13:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "length",
                                                "nodeType": "YulTypedName",
                                                "src": "2582:6:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2614:99:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2686:6:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2694:4:1",
                                                            "type": "",
                                                            "value": "0x20"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2682:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2682:17:1"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2701:6:1"
                                                },
                                                {
                                                    "name": "end",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2709:3:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                                                "nodeType": "YulIdentifier",
                                                "src": "2623:58:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2623:90:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "array",
                                                "nodeType": "YulIdentifier",
                                                "src": "2614:5:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_t_string_memory_ptr_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nodeType": "YulTypedName",
                                    "src": "2415:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "2423:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "array",
                                    "nodeType": "YulTypedName",
                                    "src": "2431:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "2364:355:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "2839:739:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "2885:83:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2887:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2887:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2887:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2860:7:1"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2869:9:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2856:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2856:23:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2881:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nodeType": "YulIdentifier",
                                                "src": "2852:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2852:32:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "2849:119:1"
                                    },
                                    {
                                        "nodeType": "YulBlock",
                                        "src": "2978:291:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "2993:38:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3017:9:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3028:1:1",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3013:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3013:17:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mload",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3007:5:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3007:24:1"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulTypedName",
                                                        "src": "2997:6:1",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "3078:83:1",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [],
                                                                "functionName": {
                                                                    "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3080:77:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "3080:79:1"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "3080:79:1"
                                                        }
                                                    ]
                                                },
                                                "condition": {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3050:6:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3058:18:1",
                                                            "type": "",
                                                            "value": "0xffffffffffffffff"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "gt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3047:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3047:30:1"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "3044:117:1"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "3175:84:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3231:9:1"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3242:6:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3227:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3227:22:1"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3251:7:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_string_memory_ptr_fromMemory",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3185:41:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3185:74:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3175:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulBlock",
                                        "src": "3279:292:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "3294:39:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3318:9:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3329:2:1",
                                                                    "type": "",
                                                                    "value": "32"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3314:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3314:18:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mload",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3308:5:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3308:25:1"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulTypedName",
                                                        "src": "3298:6:1",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "3380:83:1",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [],
                                                                "functionName": {
                                                                    "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3382:77:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "3382:79:1"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "3382:79:1"
                                                        }
                                                    ]
                                                },
                                                "condition": {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3352:6:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3360:18:1",
                                                            "type": "",
                                                            "value": "0xffffffffffffffff"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "gt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3349:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3349:30:1"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "3346:117:1"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "3477:84:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3533:9:1"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3544:6:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3529:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3529:22:1"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3553:7:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_string_memory_ptr_fromMemory",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3487:41:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3487:74:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3477:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nodeType": "YulTypedName",
                                    "src": "2801:9:1",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nodeType": "YulTypedName",
                                    "src": "2812:7:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nodeType": "YulTypedName",
                                    "src": "2824:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nodeType": "YulTypedName",
                                    "src": "2832:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "2725:853:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "3612:152:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3629:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3632:77:1",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "3622:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3622:88:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3622:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3726:1:1",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3729:4:1",
                                                    "type": "",
                                                    "value": "0x22"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "3719:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3719:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3719:15:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3750:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3753:4:1",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "3743:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3743:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3743:15:1"
                                    }
                                ]
                            },
                            "name": "panic_error_0x22",
                            "nodeType": "YulFunctionDefinition",
                            "src": "3584:180:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "3821:269:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "3831:22:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3845:4:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3851:1:1",
                                                    "type": "",
                                                    "value": "2"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "3841:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3841:12:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "length",
                                                "nodeType": "YulIdentifier",
                                                "src": "3831:6:1"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3862:38:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "data",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3892:4:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3898:1:1",
                                                    "type": "",
                                                    "value": "1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "3888:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3888:12:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "outOfPlaceEncoding",
                                                "nodeType": "YulTypedName",
                                                "src": "3866:18:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "3939:51:1",
                                            "statements": [
                                                {
                                                    "nodeType": "YulAssignment",
                                                    "src": "3953:27:1",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "length",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3967:6:1"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "3975:4:1",
                                                                "type": "",
                                                                "value": "0x7f"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "and",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3963:3:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3963:17:1"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "length",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3953:6:1"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "outOfPlaceEncoding",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3919:18:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nodeType": "YulIdentifier",
                                                "src": "3912:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3912:26:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "3909:81:1"
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "4042:42:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x22",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4056:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4056:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "4056:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "outOfPlaceEncoding",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4006:18:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "length",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4029:6:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "4037:2:1",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "lt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4026:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4026:14:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "eq",
                                                "nodeType": "YulIdentifier",
                                                "src": "4003:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4003:38:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4000:84:1"
                                    }
                                ]
                            },
                            "name": "extract_byte_array_length",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "data",
                                    "nodeType": "YulTypedName",
                                    "src": "3805:4:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "length",
                                    "nodeType": "YulTypedName",
                                    "src": "3814:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "3770:320:1"
                        }
                    ]
                },
                "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
                "id": 1,
                "language": "Yul",
                "name": "#utility.yul"
            }
        ],
        "linkReferences": {},
        "object": "60806040523480156200001157600080fd5b50604051620008253803806200082583398181016040528101906200003791906200033f565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160029080519060200190620000d0929190620000f2565b508060039080519060200190620000e9929190620000f2565b50505062000428565b8280546200010090620003f3565b90600052602060002090601f01602090048101928262000124576000855562000170565b82601f106200013f57805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200016f57825182559160200191906001019062000152565b5b5090506200017f919062000183565b5090565b5b808211156200019e57600081600090555060010162000184565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200020b82620001c0565b810181811067ffffffffffffffff821117156200022d576200022c620001d1565b5b80604052505050565b600062000242620001a2565b905062000250828262000200565b919050565b600067ffffffffffffffff821115620002735762000272620001d1565b5b6200027e82620001c0565b9050602081019050919050565b60005b83811015620002ab5780820151818401526020810190506200028e565b83811115620002bb576000848401525b50505050565b6000620002d8620002d28462000255565b62000236565b905082815260208101848484011115620002f757620002f6620001bb565b5b620003048482856200028b565b509392505050565b600082601f830112620003245762000323620001b6565b5b815162000336848260208601620002c1565b91505092915050565b60008060408385031215620003595762000358620001ac565b5b600083015167ffffffffffffffff8111156200037a5762000379620001b1565b5b62000388858286016200030c565b925050602083015167ffffffffffffffff811115620003ac57620003ab620001b1565b5b620003ba858286016200030c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200040c57607f821691505b602082108103620004225762000421620003c4565b5b50919050565b6103ed80620004386000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063893d20e814610051578063a5d3559a1461006f578063abe4136f1461008d578063f3fc0c47146100ab575b600080fd5b6100596100c9565b6040516100669190610281565b60405180910390f35b6100776100f2565b6040516100849190610281565b60405180910390f35b61009561011c565b6040516100a29190610335565b60405180910390f35b6100b36101ae565b6040516100c09190610335565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606003805461012b90610386565b80601f016020809104026020016040519081016040528092919081815260200182805461015790610386565b80156101a45780601f10610179576101008083540402835291602001916101a4565b820191906000526020600020905b81548152906001019060200180831161018757829003601f168201915b5050505050905090565b6060600280546101bd90610386565b80601f01602080910402602001604051908101604052809291908181526020018280546101e990610386565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b5050505050905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026b82610240565b9050919050565b61027b81610260565b82525050565b60006020820190506102966000830184610272565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156102d65780820151818401526020810190506102bb565b838111156102e5576000848401525b50505050565b6000601f19601f8301169050919050565b60006103078261029c565b61031181856102a7565b93506103218185602086016102b8565b61032a816102eb565b840191505092915050565b6000602082019050818103600083015261034f81846102fc565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061039e57607f821691505b6020821081036103b1576103b0610357565b5b5091905056fea2646970667358221220ed38fb1b47a9a5e73ccfc3433627c5b28d0c164987af63f841db564406425a9f64736f6c634300080d0033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x825 CODESIZE SUB DUP1 PUSH3 0x825 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x33F JUMP JUMPDEST CALLER PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP CALLER PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH1 0x2 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0xD0 SWAP3 SWAP2 SWAP1 PUSH3 0xF2 JUMP JUMPDEST POP DUP1 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0xE9 SWAP3 SWAP2 SWAP1 PUSH3 0xF2 JUMP JUMPDEST POP POP POP PUSH3 0x428 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0x100 SWAP1 PUSH3 0x3F3 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0x124 JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x170 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0x13F JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x170 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x170 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x16F JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x152 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x17F SWAP2 SWAP1 PUSH3 0x183 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x19E JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x184 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH3 0x20B DUP3 PUSH3 0x1C0 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x22D JUMPI PUSH3 0x22C PUSH3 0x1D1 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x242 PUSH3 0x1A2 JUMP JUMPDEST SWAP1 POP PUSH3 0x250 DUP3 DUP3 PUSH3 0x200 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x273 JUMPI PUSH3 0x272 PUSH3 0x1D1 JUMP JUMPDEST JUMPDEST PUSH3 0x27E DUP3 PUSH3 0x1C0 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x2AB JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x28E JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH3 0x2BB JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x2D8 PUSH3 0x2D2 DUP5 PUSH3 0x255 JUMP JUMPDEST PUSH3 0x236 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x2F7 JUMPI PUSH3 0x2F6 PUSH3 0x1BB JUMP JUMPDEST JUMPDEST PUSH3 0x304 DUP5 DUP3 DUP6 PUSH3 0x28B JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x324 JUMPI PUSH3 0x323 PUSH3 0x1B6 JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH3 0x336 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x2C1 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH3 0x359 JUMPI PUSH3 0x358 PUSH3 0x1AC JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP4 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x37A JUMPI PUSH3 0x379 PUSH3 0x1B1 JUMP JUMPDEST JUMPDEST PUSH3 0x388 DUP6 DUP3 DUP7 ADD PUSH3 0x30C JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 DUP4 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x3AC JUMPI PUSH3 0x3AB PUSH3 0x1B1 JUMP JUMPDEST JUMPDEST PUSH3 0x3BA DUP6 DUP3 DUP7 ADD PUSH3 0x30C JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x40C JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH3 0x422 JUMPI PUSH3 0x421 PUSH3 0x3C4 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x3ED DUP1 PUSH3 0x438 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x893D20E8 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0xA5D3559A EQ PUSH2 0x6F JUMPI DUP1 PUSH4 0xABE4136F EQ PUSH2 0x8D JUMPI DUP1 PUSH4 0xF3FC0C47 EQ PUSH2 0xAB JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x59 PUSH2 0xC9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x66 SWAP2 SWAP1 PUSH2 0x281 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x77 PUSH2 0xF2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x84 SWAP2 SWAP1 PUSH2 0x281 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x95 PUSH2 0x11C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x335 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xB3 PUSH2 0x1AE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xC0 SWAP2 SWAP1 PUSH2 0x335 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD PUSH2 0x12B SWAP1 PUSH2 0x386 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x157 SWAP1 PUSH2 0x386 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x1A4 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x179 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x1A4 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x187 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x2 DUP1 SLOAD PUSH2 0x1BD SWAP1 PUSH2 0x386 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x1E9 SWAP1 PUSH2 0x386 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x236 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x20B JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x236 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x219 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x26B DUP3 PUSH2 0x240 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x27B DUP2 PUSH2 0x260 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x296 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x272 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2D6 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x2BB JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x2E5 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x307 DUP3 PUSH2 0x29C JUMP JUMPDEST PUSH2 0x311 DUP2 DUP6 PUSH2 0x2A7 JUMP JUMPDEST SWAP4 POP PUSH2 0x321 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x2B8 JUMP JUMPDEST PUSH2 0x32A DUP2 PUSH2 0x2EB JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x34F DUP2 DUP5 PUSH2 0x2FC JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x39E JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0x3B1 JUMPI PUSH2 0x3B0 PUSH2 0x357 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xED CODESIZE 0xFB SHL SELFBALANCE 0xA9 0xA5 0xE7 EXTCODECOPY 0xCF 0xC3 NUMBER CALLDATASIZE 0x27 0xC5 0xB2 DUP14 0xC AND 0x49 DUP8 0xAF PUSH4 0xF841DB56 DIFFICULTY MOD TIMESTAMP GAS SWAP16 PUSH5 0x736F6C6343 STOP ADDMOD 0xD STOP CALLER ",
        "sourceMap": "61:661:0:-:0;;;169:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;242:10;234:5;;:18;;;;;;;;;;;;;;;;;;269:10;263:3;;:16;;;;;;;;;;;;;;;;;;304:7;290:11;:21;;;;;;;;;;;;:::i;:::-;;333:4;322:8;:15;;;;;;;;;;;;:::i;:::-;;169:176;;61:661;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:1:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:307::-;1678:1;1688:113;1702:6;1699:1;1696:13;1688:113;;;1787:1;1782:3;1778:11;1772:18;1768:1;1763:3;1759:11;1752:39;1724:2;1721:1;1717:10;1712:15;;1688:113;;;1819:6;1816:1;1813:13;1810:101;;;1899:1;1890:6;1885:3;1881:16;1874:27;1810:101;1659:258;1610:307;;;:::o;1923:421::-;2012:5;2037:66;2053:49;2095:6;2053:49;:::i;:::-;2037:66;:::i;:::-;2028:75;;2126:6;2119:5;2112:21;2164:4;2157:5;2153:16;2202:3;2193:6;2188:3;2184:16;2181:25;2178:112;;;2209:79;;:::i;:::-;2178:112;2299:39;2331:6;2326:3;2321;2299:39;:::i;:::-;2018:326;1923:421;;;;;:::o;2364:355::-;2431:5;2480:3;2473:4;2465:6;2461:17;2457:27;2447:122;;2488:79;;:::i;:::-;2447:122;2598:6;2592:13;2623:90;2709:3;2701:6;2694:4;2686:6;2682:17;2623:90;:::i;:::-;2614:99;;2437:282;2364:355;;;;:::o;2725:853::-;2824:6;2832;2881:2;2869:9;2860:7;2856:23;2852:32;2849:119;;;2887:79;;:::i;:::-;2849:119;3028:1;3017:9;3013:17;3007:24;3058:18;3050:6;3047:30;3044:117;;;3080:79;;:::i;:::-;3044:117;3185:74;3251:7;3242:6;3231:9;3227:22;3185:74;:::i;:::-;3175:84;;2978:291;3329:2;3318:9;3314:18;3308:25;3360:18;3352:6;3349:30;3346:117;;;3382:79;;:::i;:::-;3346:117;3487:74;3553:7;3544:6;3533:9;3529:22;3487:74;:::i;:::-;3477:84;;3279:292;2725:853;;;;;:::o;3584:180::-;3632:77;3629:1;3622:88;3729:4;3726:1;3719:15;3753:4;3750:1;3743:15;3770:320;3814:6;3851:1;3845:4;3841:12;3831:22;;3898:1;3892:4;3888:12;3919:18;3909:81;;3975:4;3967:6;3963:17;3953:27;;3909:81;4037:2;4029:6;4026:14;4006:18;4003:38;4000:84;;4056:18;;:::i;:::-;4000:84;3821:269;3770:320;;;:::o;61:661:0:-;;;;;;;"
    };

    assetContract = new web3.eth.Contract(abi, contractUrl);

    return assetContract;
}

async function deployAssetContract(nickname, ipfsUrl){
    let assetContract = new web3.eth.Contract([{"inputs":[{"internalType":"string","name":"ipfsUrl","type":"string"},{"internalType":"string","name":"nick","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getDid","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getIpfsAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNickname","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]);
    return asset = assetContract.deploy({
        data: '0x60806040523480156200001157600080fd5b50604051620008253803806200082583398181016040528101906200003791906200033f565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160029080519060200190620000d0929190620000f2565b508060039080519060200190620000e9929190620000f2565b50505062000428565b8280546200010090620003f3565b90600052602060002090601f01602090048101928262000124576000855562000170565b82601f106200013f57805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200016f57825182559160200191906001019062000152565b5b5090506200017f919062000183565b5090565b5b808211156200019e57600081600090555060010162000184565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200020b82620001c0565b810181811067ffffffffffffffff821117156200022d576200022c620001d1565b5b80604052505050565b600062000242620001a2565b905062000250828262000200565b919050565b600067ffffffffffffffff821115620002735762000272620001d1565b5b6200027e82620001c0565b9050602081019050919050565b60005b83811015620002ab5780820151818401526020810190506200028e565b83811115620002bb576000848401525b50505050565b6000620002d8620002d28462000255565b62000236565b905082815260208101848484011115620002f757620002f6620001bb565b5b620003048482856200028b565b509392505050565b600082601f830112620003245762000323620001b6565b5b815162000336848260208601620002c1565b91505092915050565b60008060408385031215620003595762000358620001ac565b5b600083015167ffffffffffffffff8111156200037a5762000379620001b1565b5b62000388858286016200030c565b925050602083015167ffffffffffffffff811115620003ac57620003ab620001b1565b5b620003ba858286016200030c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200040c57607f821691505b602082108103620004225762000421620003c4565b5b50919050565b6103ed80620004386000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063893d20e814610051578063a5d3559a1461006f578063abe4136f1461008d578063f3fc0c47146100ab575b600080fd5b6100596100c9565b6040516100669190610281565b60405180910390f35b6100776100f2565b6040516100849190610281565b60405180910390f35b61009561011c565b6040516100a29190610335565b60405180910390f35b6100b36101ae565b6040516100c09190610335565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606003805461012b90610386565b80601f016020809104026020016040519081016040528092919081815260200182805461015790610386565b80156101a45780601f10610179576101008083540402835291602001916101a4565b820191906000526020600020905b81548152906001019060200180831161018757829003601f168201915b5050505050905090565b6060600280546101bd90610386565b80601f01602080910402602001604051908101604052809291908181526020018280546101e990610386565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b5050505050905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026b82610240565b9050919050565b61027b81610260565b82525050565b60006020820190506102966000830184610272565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156102d65780820151818401526020810190506102bb565b838111156102e5576000848401525b50505050565b6000601f19601f8301169050919050565b60006103078261029c565b61031181856102a7565b93506103218185602086016102b8565b61032a816102eb565b840191505092915050565b6000602082019050818103600083015261034f81846102fc565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061039e57607f821691505b6020821081036103b1576103b0610357565b5b5091905056fea2646970667358221220ed38fb1b47a9a5e73ccfc3433627c5b28d0c164987af63f841db564406425a9f64736f6c634300080d0033', 
        arguments: [
            ipfsUrl,
            nickname,
        ]
    }).send({
        from: web3.eth.defaultAccount, 
        gas: '4700000'
    }, function (e, contract){
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })
}

async function loadWeb3(){
    if (window.ethereum){
        web3 = new Web3(window.ethereum);;
        await window.ethereum.enable();
    } else {
        window.alert('MetaMask not found!');
        return;
    }

    web3.eth.defaultAccount = "0xF4Ded1E06a7A8a25D9aD2E3e1953cFFDbBb00e41";
}