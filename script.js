function updateForm() {
    const formula = document.getElementById('formulaSelect').value;
    const dynamicInputs = document.getElementById('dynamicInputs');
    dynamicInputs.innerHTML = ''; // Clear previous inputs
    
    switch (formula) {
        case 'kinetic_energy':
            dynamicInputs.innerHTML = `
                <input type="text" name="m" placeholder="Mass (m)" required>
                <input type="text" name="v" placeholder="Velocity (v)" required>
            `;
            break;
        case 'force':
            dynamicInputs.innerHTML = `
                <input type="text" name="m" placeholder="Mass (m)" required>
                <input type="text" name="a" placeholder="Acceleration (a)" required>
            `;
            break;
        case 'momentum':
            dynamicInputs.innerHTML = `
                <input type="text" name="m" placeholder="Mass (m)" required>
                <input type="text" name="v" placeholder="Velocity (v)" required>
            `;
            break;
        case 'work':
            dynamicInputs.innerHTML = `
                <input type="text" name="f" placeholder="Force (F)" required>
                <input type="text" name="d" placeholder="Distance (d)" required>
                <input type="text" name="theta" placeholder="Angle (θ) in degrees" required>
            `;
            break;
        case 'wave_speed':
            dynamicInputs.innerHTML = `
                <input type="text" name="f" placeholder="Frequency (f)" required>
                <input type="text" name="lambda" placeholder="Wavelength (λ)" required>
            `;
            break;
        case 'ohms_law':
            dynamicInputs.innerHTML = `
                <input type="text" name="i" placeholder="Current (I)" required>
                <input type="text" name="r" placeholder="Resistance (R)" required>
            `;
            break;
        default:
            break;
    }
}