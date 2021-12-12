const InpTxt = (props) => {

    return (
        <>
            {
                props.arr.map((el,i)=>{
                    if(props.type != 'select') return(
                        <div key={i} className='txt-inp'>
                            <label htmlFor={el.en}>{el.ar}</label>
                            <input name={el.en} type={props.type} value={props.val[el.en]} onChange = {props.handleChange} className = 'child-input'/>        
                        </div>
                    )
                    else {
                        return(
                            <div key={i} className='select-inp'>
                                <label htmlFor={el.en}>{el.ar}</label>
                                <select defaultValue={el.childrens[0]}  onChange={props.handleChange} name={el.en} className = 'child-select'>
                                    {
                                        el.childrens.map((ele,y)=>{
                                            return <option value={ele} key={y}>{ele}</option>
                                        })
                                    }
                                </select>
                            </div>
                        )
                    }
                })
            }
        </>
    );
}

export default InpTxt;
