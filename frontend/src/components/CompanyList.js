import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography } from '@mui/material';
import JoblyApi from '../JoblyApi';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await JoblyApi.getCompanies();
        setCompanies(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error Fetching Companies', error);
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ backgroundColor: '#212121', color: '#00bcd4', minHeight: '100vh', padding: '2rem' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '2rem', color: '#00bcd4' }}>
        Companies
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {companies.map((company) => (
          <Link key={company.handle} to={`/companies/${company.handle}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ width: '300px', backgroundColor: '#424242', borderRadius: '8px', cursor: 'pointer' }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: '#00bcd4' }}>
                  {company.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ffffff' }}>
                  {company.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default CompanyList;
