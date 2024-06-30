
const regExpvaidations = {
    "REQUIRED": {
        pattern: /./,
        error: "Required filed!!!"
    },
    "EMAIL": {
        pattern: /^[a-zA-Z]{1}[a-zA-Z0-9_$]{0,}@[a-zA-Z]{3,7}\.[a-zA-Z]{2,3}$/,
        error: "Should be a valid email format!!!"
    },
    "MIN5CHAR": {
        pattern: /.{5}/,
        error: "Minimum 5 chars!!!"
    },
    "PHONE": {
        pattern: /^[0-9]{10}$/,
        error: "Exactly 10 digits!!!"
    }
}

function validate(inputControlObj, inputControls) {
    const { criteria, value, compare } = inputControlObj;
    inputControlObj.error = "";
    for (let text of criteria) {
        switch (text) {
            case 'SIZE':
                const { size } = value;
                if (size > 6144) {
                    inputControlObj.error = "File size should not exceeded 6KB";
                    break;
                }
                break;
            case 'TYPE':
                const { type } = value;
                if (!type?.includes('image')) {
                    inputControlObj.error = "File should be image only";
                    break;
                }
                break;
            case 'COMPARE':
                const compareObj1 = inputControls.find((obj) => obj.name === compare[0])
                const compareObj2 = inputControls.find((obj) => obj.name === compare[1])
                if (compareObj1.value && compareObj2.value && compareObj1.value !== compareObj2.value) {
                    inputControlObj.error = "Password mismatch";
                    break;
                }
                break;
            default:
                const { pattern, error } = regExpvaidations[text]
                if (!pattern.test(value)) {
                    inputControlObj.error = error;
                    break;
                }

        }
        if (inputControlObj.error) {
            break;
        }

    }
}
export function formLevelValidation(formControls, setFormControls) {
    // const clonedFormControl = JSON.parse(JSON.stringify(formControls))
    const clonedFormControl = Object.values(Object.assign({}, formControls));
    const dataObj = {}
    clonedFormControl.forEach((obj) => {
        const { name, value, error } = obj;
        dataObj[name] = value;
        if (!value && !error) {
            validate(obj, clonedFormControl)
        }
    })

    const isFormValid = !clonedFormControl.some((obj) => obj.error)
    setFormControls(clonedFormControl)

    return [isFormValid, dataObj]
}

export function fieldLevelValidation(eve, formControls, setFormControls) {
    const { name, value, type, files } = eve.target;
    const clonedFormControl = JSON.parse(JSON.stringify(formControls))

    const inputControlObj = clonedFormControl.find((obj) => {
        return obj.name === name;
    })
    inputControlObj.error = "";
    if (type === 'file') {
        const file = files['0'];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            inputControlObj.src = reader.result;
            inputControlObj.value = file;
            validate(inputControlObj, clonedFormControl)
            setFormControls(clonedFormControl)
        }
        reader.onerror = () => {

        }
    } else {
        inputControlObj.value = value;
        validate(inputControlObj, clonedFormControl)
        setFormControls(clonedFormControl)
    }
}

export function setDataToForm(formControls, setFormControls, data) {
    const clonedFormControl = JSON.parse(JSON.stringify(formControls))
    clonedFormControl.forEach((obj) => {
        obj.value = data[obj.name]
    })
    setFormControls(clonedFormControl)
}

export function clearFormData(formControls, setFormControls) {
    const clonedFormControl = JSON.parse(JSON.stringify(formControls))
    clonedFormControl.forEach((obj) => {
        obj.value = "";
    })
    setFormControls(clonedFormControl)
}