import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { red } from "@material-ui/core/colors"

const SwitchR = () => {
    const context = useContext(MyContext);

    const { classN, setClassN } = context;

    const toggleContext = () => {
        setClassN(classN === "" ? "active" : "")
    }

    let textCol = ""
    const primaryz = red[250]
    const secondaryz = red[500]
    if (classN === "") {
        textCol = "text-dark"
    } else {
        textCol = "text-light"
    }

    return (
        <div>
            <FormGroup row>
                <FormControlLabel className={`${textCol}`} control={<Switch onClick={toggleContext} />} label="Dark Mode" />
            </FormGroup>
        </div>
    );
};

export default SwitchR;
