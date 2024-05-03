import Input from './Input';

const InputFields = [
    {name: 'initialInvestment', label: 'Initial Investment'},
    {name: 'annualInvestment', label: 'Annual Investment'},
    {name: 'expectedReturn', label: 'Expected Return'},
    {name: 'duration', label: 'Duration'}
]

export default function UserInput({inputValues, onInputChange}){
    return <section id='user-input'>
        <div className='input-group'>
            <Input name={InputFields[0].name} type={'number'} label={InputFields[0].label} value={inputValues[InputFields[0].name]} onInputChange={onInputChange} />
            <Input name={InputFields[1].name} type={'number'} label={InputFields[1].label} value={inputValues[InputFields[1].name]} onInputChange={onInputChange} />
        </div>
        <div className='input-group'>
            <Input name={InputFields[2].name} type={'number'} label={InputFields[2].label} value={inputValues[InputFields[2].name]} onInputChange={onInputChange} />
            <Input name={InputFields[3].name} type={'number'} label={InputFields[3].label} value={inputValues[InputFields[3].name]} onInputChange={onInputChange} />
        </div>
    </section>;
}