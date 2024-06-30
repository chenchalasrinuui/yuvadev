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
        "lblColumns": 5,
        "errorMsgColumns": 3,
        "inputCtrlColumns": 4
    },
    {
        "lbl": "User ID",
        "tag": "input",
        "type": "text",
        "name": "email",
        "isRequired": true,
        "value": "",
        "error": "",
        "criteria": [
            "REQUIRED",
            "EMAIL"
        ],
        "placeholder": "Email",
        "lblColumns": 5,
        "errorMsgColumns": 3,
        "inputCtrlColumns": 4
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
        "lblColumns": 5,
        "errorMsgColumns": 3,
        "inputCtrlColumns": 4
    },
    {
        "lbl": "Company/College Name",
        "tag": "input",
        "type": "text",
        "name": "cname",
        "isRequired": true,
        "value": "",
        "error": "",
        "criteria": [
            "REQUIRED"
        ],
        "placeholder": "Company/College Name",
        "lblColumns": 5,
        "errorMsgColumns": 3,
        "inputCtrlColumns": 4
    },
    {
        "lbl": "Message",
        "tag": "textarea",
        "name": "message",
        "isRequired": false,
        "value": "",
        "error": "",
        "criteria": [],
        "placeholder": "Message here",
        "lblColumns": 5,
        "errorMsgColumns": 3,
        "inputCtrlColumns": 4
    }
]