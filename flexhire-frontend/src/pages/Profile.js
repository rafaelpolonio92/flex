import React from 'react';
import { Paper, Typography, Avatar, Chip, Card, CardContent, CardMedia, Grid } from '@mui/material';
import styled from '@emotion/styled';

const ProfileContainer = styled(Paper)(({ theme }) => ({
  padding: `10px`,
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: `${theme.spacing * 10}px`,
  height: `${theme.spacing * 10}px`,
  marginRight: `30px`,
}));

const SkillsChip = styled(Chip)(({ theme }) => ({
  margin: `${theme.spacing}px`,
}));

const VideoAnswerMedia = styled(CardMedia)({
  height: '140px',
});

function Profile() {
  const profileData = {
    name: 'Rafael Polonio',
    avatar: 'path_to_avatar.jpg',
    industry: 'Software Development',
    skills: [
      { name: 'JavaScript', experience: '5 years' },
      { name: 'React', experience: '4 years' },
    ],
    videoAnswers: [
      'path_to_video1.mp4',
      'path_to_video2.mp4',
    ],
  };

  return (
    <ProfileContainer>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={8}>
          <Grid container alignItems="center">
            <LargeAvatar src={profileData.avatar} />
            <div>
              <Typography variant="h5">{profileData.name}</Typography>
              <Typography variant="subtitle1">{profileData.industry}</Typography>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Skills:</Typography>
          {profileData.skills.map((skill, index) => (
            <SkillsChip
              key={index}
              label={`${skill.name} - ${skill.experience}`}
            />
          ))}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Video Answers:</Typography>
          {profileData.videoAnswers.map((videoUrl, index) => (
            <Card key={index} sx={{ marginBottom: '15px' }}>
              <VideoAnswerMedia
                component="video"
                controls
                image={videoUrl}
              />
              <CardContent>
                <Typography variant="caption">Answer {index + 1}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </ProfileContainer>
  );
}

export default Profile;
