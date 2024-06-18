import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import JoblyApi from '../JoblyApi';

function Job() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await JoblyApi.getJobs();
        setJobs(jobsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error Fetching Jobs', error);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        const applications = await JoblyApi.getUserApplications();
        const appliedJobIds = applications.map(app => app.jobId);
        setAppliedJobs(appliedJobIds);
      } catch (error) {
        console.error('Error Fetching User Applications', error);
      }
    };

    fetchUserApplications();
  }, []);

  const handleApply = async (jobId) => {
    try {
      await JoblyApi.applyToJob(jobId);
      setAppliedJobs(prevState => [...prevState, jobId]);
    } catch (error) {
      console.error('Error Applying to Job', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ backgroundColor: '#212121', color: '#00bcd4', minHeight: '100vh', padding: '2rem' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '2rem', color: '#00bcd4' }}>
        Jobs
      </Typography>
      <List>
        {jobs.map((job) => (
          <ListItem key={job.id}>
            <ListItemText
              primary={job.title}
              secondary={`Salary: ${job.salary || 'N/A'}, Equity: ${job.equity || 'N/A'}`}
            />
            <Button
              onClick={() => handleApply(job.id)}
              disabled={appliedJobs.includes(job.id)}
              variant="outlined"
              sx={{
                backgroundColor: '#212121',
                border: '.2rem solid #212121',
                color: '#00bcd4',
                fontSize: 'large',
                padding: '.6rem 2rem',
                '&:hover': {
                  border: '.2rem solid #00bcd4',
                  color: '#00bcd4'
                }
              }}
            >
              {appliedJobs.includes(job.id) ? 'Applied' : 'Apply'}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Job;
