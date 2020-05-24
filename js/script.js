const selectFrom = document.getElementById("selectFrom");
const selectTo = document.getElementById("selectTo");
const qtyInput = document.getElementById("qty");
const resultTitle = document.getElementById("resultTitle");
const resultValue = document.getElementById("resultValue");

qtyInput.addEventListener("input", function() {
    output();
});

selectFrom.addEventListener("change", function() {
    output();
});

selectTo.addEventListener("change", function() {
    output();
});


function convertVal() {
    const selectFromVal = document.getElementById("selectFrom").value;
    const selectToVal = document.getElementById("selectTo").value;
    const qty = document.getElementById("qty").value;

    if (selectFromVal == "Centimeter") {
        switch (selectToVal) {
            case "Centimeter": return qty;
            
            case "Foot": return qty * 0.032808399;

            case "Inch": return qty * 0.393700787;

            case "Kilometer": return qty * 0.00001;

            case "Meter": return qty * 0.01;

            case "Mile": return qty * 0.0000062137119224;

            case "Milimeter": return qty * 10;

            case "Yard": return qty * 0.010936132983;
        }
    } else if (selectFromVal == "Foot") {
        switch (selectToVal) {
            case "Centimeter": return qty * 30.48;
            
            case "Foot": return qty;

            case "Inch": return qty * 12;

            case "Kilometer": return qty * 0.0003048;

            case "Meter": return qty * 0.3048;

            case "Mile": return qty * 0.00018939393939;

            case "Milimeter": return qty * 304.8;

            case "Yard": return qty * 0.33333333333;
        }
    } else if (selectFromVal == "Inch") {
        switch (selectToVal) {
            case "Centimeter": return qty * 2.54;
            
            case "Foot": return qty * 0.083333333333;

            case "Inch": return qty;

            case "Kilometer": return qty * 0.0000254;

            case "Meter": return qty * 0.0254;

            case "Mile": return qty * 0.000015782828283;

            case "Milimeter": return qty * 25.4;

            case "Yard": return qty * 0.027777777778;
        }
    } else if (selectFromVal == "Kilometer") {
        switch (selectToVal) {
            case "Centimeter": return qty * 100000;
            
            case "Foot": return qty * 3280.839895;

            case "Inch": return qty * 39370.07874;

            case "Kilometer": return qty;

            case "Meter": return qty * 1000;

            case "Mile": return qty * 0.62137119224;

            case "Milimeter": return qty * 1000000;

            case "Yard": return qty * 1093.6132983;
        }
    } else if (selectFromVal == "Meter") {
        switch (selectToVal) {
            case "Centimeter": return qty * 100;
            
            case "Foot": return qty * 3.280839895;

            case "Inch": return qty * 39.37007874;

            case "Kilometer": return qty * 0.001;

            case "Meter": return qty;

            case "Mile": return qty * 0.00062137119224;

            case "Milimeter": return qty * 1000;

            case "Yard": return qty * 1.0936132983;
        }
    } else if (selectFromVal == "Mile") {
        switch (selectToVal) {
            case "Centimeter": return qty * 160934.4;
            
            case "Foot": return qty * 5280;

            case "Inch": return qty * 63360;

            case "Kilometer": return qty * 1.609344;

            case "Meter": return qty * 1609.344;

            case "Mile": return qty;

            case "Milimeter": return qty * 1609344;

            case "Yard": return qty * 1760;
        }
    } else if (selectFromVal == "Milimeter") {
        switch (selectToVal) {
            case "Centimeter": return qty * 0.1;
            
            case "Foot": return qty * 0.003280839895;

            case "Inch": return qty * 0.03937007874;

            case "Kilometer": return qty * 0.000001;

            case "Meter": return qty * 0.001;

            case "Mile": return qty * 6.2137119224e-7;

            case "Milimeter": return qty;

            case "Yard": return qty * 0.0010936132983;
        }
    } else if (selectFromVal == "Yard") {
        switch (selectToVal) {
            case "Centimeter": return qty * 91.44;
            
            case "Foot": return qty * 3;

            case "Inch": return qty * 36;

            case "Kilometer": return qty * 0.0009144;

            case "Meter": return qty * 0.9144;

            case "Mile": return qty * 0.00056818181818;

            case "Milimeter": return qty * 914.4;

            case "Yard": return qty;
        }
    }
}

function output() {
    let curentVal = convertVal();

    const selectToVal = document.getElementById("selectTo").value;

    resultTitle.innerHTML = `${selectToVal}:`;
    resultValue.innerHTML = curentVal;
}

output();