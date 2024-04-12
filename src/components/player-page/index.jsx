import * as React from 'react';
import { Container, Stack, List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText, Button, TextField} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// import TextEditor from '../textEditor';
import TextEditor from '../textBox';
import { useState } from 'react';
import Draggable from 'react-draggable';

const PlayerPage = ({playlists}) => {
    const { playlistId, videoId } = useParams();
    const current = playlists[playlistId];
    const [draggable, setDraggable] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState(videoId);

    if(!current) return (<NotFound />);

// setting the previous and next video id
    let prevVideoId = current.playListItems[0].contentDetails.videoId;
    let nextVideoId = current.playListItems[current.playListItems.length - 1].contentDetails.videoId;

    const index = current.playListItems.findIndex((item) => item.contentDetails.videoId === videoId);
    if(index === 0){
        if(current.playListItems.length > 1) nextVideoId = current.playListItems[index + 1].contentDetails.videoId;
    }else if(index === current.playListItems.length - 1){
        prevVideoId = current.playListItems[index - 1].contentDetails.videoId;
    }else{
        prevVideoId = current.playListItems[index - 1].contentDetails.videoId;
        nextVideoId = current.playListItems[index + 1].contentDetails.videoId;
    }

    

    const handlePrevious = () => {
        setCurrentVideoId(prevVideoId);
    }

    const handleNext = () => {
        setCurrentVideoId(nextVideoId);
    }


    return (
        <div style={{color: 'white', backgroundColor:'#333333'}}>
            <Container maxWidth={'lg'} sx={{py: 10}}>
                <Container maxWidth={'lg'} sx={{alignContent: 'center'}}>
                    <iframe width={'100%'} height={'400px'} style={{border: '0px'}} src={`https://www.youtube.com/embed/${videoId}`} referrerPolicy='strict-origin-when-cross-origin'></iframe>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button variant='contained' style={{backgroundColor: '#ff0000'}} to={`/player/${playlistId}/${prevVideoId}`} component={Link} onClick={handlePrevious}>Previous</Button>
                        <Button variant='contained' style={{backgroundColor: '#ff0000'}} to={`/player/${playlistId}/${nextVideoId}`} component={Link} onClick={handleNext}>Next</Button>
                    </Stack>
                </Container>
                <Container spacing={2} sx={{my: 5}}>
                    <Stack spacing={2} direction={"column"} justifyContent={'center'}>
                        <h2>Make Note</h2>
                        
                        <Draggable disabled={!draggable}>
                            <div className='draggable-div'>
                                <Button variant='contained' style={{backgroundColor: '#ff0000', width: '200px', fontSize: '12px'}} onClick={() => setDraggable(!draggable)}>{draggable ? 'Make Static':'Make Draggable'}</Button>
                                <TextEditor videoId={currentVideoId} playlistId={playlistId}/>
                            </div>
                        </Draggable>
                    </Stack>
                    <Container>
                        <Typography variant='h5' align='center' sx={{marginTop: '15%', marginBottom: '3%'}}>
                            <b>Videos</b>
                        </Typography>
                        <List sx={{maxHeight: '400px', maxWidth:'100%', overflow: 'auto'}}>
                            {current?.playListItems.map((item) => (
                                <ListItem key={item.contentDetails.videoId}>
                                    <ListItemButton to={`/player/${playlistId}/${item.contentDetails.videoId}`}>
                                        <ListItemAvatar>
                                            <Avatar src={item.thumbnail.url}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={`Line item ${item.title}`}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default PlayerPage;