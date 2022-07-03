import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import "./Wind.css"

const Wind = (props) => {

    return (
        <div className='wind'>
            <CircularSlider
                label=""
                min={1}
                max={360}
                width={50}
                direction={1}
                knobSize={10}
                trackSize={4}
                dataIndex={360}
                progressSize={4}
                knobPosition="top"
                knobColor="tomato"
                appendToValue="°"
                valueFontSize="12px"
                labelFontSize='10px'
                verticalOffset='4px'
                progressColorFrom="grey"
                progressColorTo="grey"
                onChange={value => { props.calcWind(value) }}
            />
        </div>
    )
};

export default Wind;