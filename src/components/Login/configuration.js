export const config = [
    {
        "lbl": "User ID",
        "tag": "input",
        "type": "text",
        "name": "uid",
        "isRequired": true,
        "value": "",
        "error": "",
        "criteria": [
            "REQUIRED",
            "EMAIL"
        ],
        "placeholder": "User id",
        "lblColumns": 12,
        "errorMsgColumns": 12,
        "inputCtrlColumns": 12
    },
    {
        "lbl": "Password",
        "tag": "input",
        "type": "password",
        "name": "password",
        "isRequired": true,
        "value": "",
        "error": "",
        "criteria": [
            "REQUIRED",
            "MIN5CHAR"
        ],
        "placeholder": "Password",
        "lblColumns": 12,
        "errorMsgColumns": 12,
        "inputCtrlColumns": 12
    }
]