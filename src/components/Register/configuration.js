export const config = [
    {
        "lbl": "Full Name",
        "tag": "input",
        "type": "text",
        "name": "name",
        "isRequired": true,
        "value": "",
        "error": "",
        "criteria": [
            "REQUIRED"
        ],
        "placeholder": "Full name",
        "lblColumns": 12,
        "errorMsgColumns": 12,
        "inputCtrlColumns": 12
    },
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
        "lbl": "Phone",
        "tag": "input",
        "type": "number",
        "name": "phone",
        "isRequired": true,
        "value": "",
        "error": "",
        "criteria": [
            "REQUIRED"
        ],
        "placeholder": "Phone",
        "lblColumns": 12,
        "errorMsgColumns": 12,
        "inputCtrlColumns": 12
    }
]