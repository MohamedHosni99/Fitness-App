import React,{useState,useEffect} from 'react';
import { Pagination } from '@mui/material';
import {Box,Stack,Typography} from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/FetchData'; 
import ExerciseCard from './ExerciseCard';
import { NearbyError } from '@mui/icons-material';

const Exercises = ({exercises,setExercises,bodyPart}) => {

  const [currentPage,setCurrentPage] =useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)


  const paginate = (e,val) => {
    setCurrentPage (val);
    window.scrollTo({top:1800, behavior:'smooth'})
  }

  useEffect(()=>{

    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000',
        exerciseOptions);
      }
      else{
        exercisesData =    exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
      }

      setExercises(exercisesData)


    }

    fetchExercisesData();

  },[bodyPart])
  return (
    <Box id='exercises'
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
    >
    <Typography variant='h3' mb='46px'>
      Showing Results
    </Typography>
    <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} 
      flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))} 
    </Stack>
    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
} 


export default Exercises;