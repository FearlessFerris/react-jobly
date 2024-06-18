import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, CircularProgress, Card, CardContent } from '@mui/material';
import JoblyApi from '../JoblyApi';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany(companyData);
      } catch (error) {
        console.error('Error fetching company details:', error);
        setError('Error fetching company details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [handle]);

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  if (error) {
    return <Typography variant="body1" color="error">{error}</Typography>;
  }

  if (!company) {
    return <Typography variant="body1">Company not found</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#212121', color: '#00bcd4', minHeight: '100vh', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom color="primary">
        {company.name}
      </Typography>
      <Typography variant="body1" gutterBottom color="textPrimary">
        {company.description}
      </Typography>
      <Typography variant="h6" gutterBottom color="primary">
        Number of Employees: {company.numEmployees}
      </Typography>
      {company.logoUrl && (
        <Box
          component="img"
          src={company.logoUrl}
          alt={`${company.name} logo`}
          sx={{ maxWidth: '100px', marginBottom: '1rem' }}
        />
      )}
      <Typography variant="h6" gutterBottom color="primary">
        Jobs at {company.name}
      </Typography>
      <List>
        {company.jobs.map((job) => (
          <ListItem key={job.id} sx={{ marginBottom: '0.5rem' }}>
            <Card variant="outlined" sx={{ width: '100%', backgroundColor: '#424242', borderRadius: '8px' }}>
              <CardContent>
                <ListItemText
                  primary={<Typography variant="body1" color="primary">{job.title}</Typography>}
                  secondary={<Typography variant="body2" color="textSecondary">Salary: {job.salary || 'N/A'}, Equity: {job.equity || 'N/A'}</Typography>}
                />
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CompanyDetail;
