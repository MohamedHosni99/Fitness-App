import React from 'react';
import {Stack,Typography} from '@mui/material';
import icon from '../assets/icons/gym.png';

const BodyPart = ({item,bodyPart,setBodyPart}) => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #FF2625' : '', 
                backgroundcolor:'#fff',
                borderBottomLeftRadius: '20px',
                width:'270px',
                height:'280px',
                cursor:'pointer',
                gap:'47px'
            }
        }
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
        >
            <img src={icon} alt='dumbbll' style={{width:'40px' ,height:'40px'}}/>
            <Typography
                fontWeight='bold'
                fontSize='24px'
                textTransform= 'capitalize'
                color = '#3A1212'
            >{item}</Typography>
        </Stack>
    )
}

export default BodyPart;