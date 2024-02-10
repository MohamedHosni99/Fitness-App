import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {exerciseOptions,fetchData,youtubeOptions} from '../utils/FetchData'
import SimilarExercises  from '../components/SimilarExercises';
import Detail  from '../components/Detail';
import ExerciseVideos  from '../components/ExerciseVideos';

const ExerciseDetail = () => {
    const [exerciseDetail,setExerciseDetail] =useState({});
    const [exerciseVideos,setExerciseVideos] =useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const {id} =useParams();
  
  useEffect(()=>{
    const fetchExerciseData = async () =>{
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await  fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}?limit=1000`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}?limit=1000`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExerciseData();

  },[id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail