import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Style/Pricing.css'; // Import the CSS file

export default function Pricing() {
  React.useEffect(() => {
    // Check if the device is not mobile (screen width > 768px)
    if (window.innerWidth > 768) {
      gsap.registerPlugin(ScrollTrigger);

      // Header animation
      gsap.fromTo(
        '.pricing-h4',
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-h4',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.pricing-h2',
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-h2',
            start: 'top 80%',
          },
        }
      );

      // Pricing cards animation
      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.3, // Adds a stagger effect to the cards
          scrollTrigger: {
            trigger: '.pricing-card',
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="pricing">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          <h4 className="pricing-h4">Pricing Package</h4>
          <h2 className="pricing-h2">
            Amazing <span>Pricing</span> For Your Projects.
          </h2>
        </Box>

        {/* Pricing Cards Section */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mt: 5,
            flexWrap: 'wrap', // Allow wrapping for smaller screens
          }}
        >
          {/* Basic Plan */}
          <Card
            className="pricing-card"
            size="lg"
            variant="outlined"
            sx={{ minWidth: 300, maxWidth: 400 }}
          >
            <Chip size="sm" variant="outlined" color="neutral">
              BASIC
            </Chip>
            <Typography level="h2">Basic</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                1 Custom Website Design
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Mobile-Friendly Layout
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Basic SEO Setup
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Contact Form Integration
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                1 Revision
              </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Typography level="title-lg" sx={{ mr: 'auto' }}>
                ₹15,000{' '}
                <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                  / one-time
                </Typography>
              </Typography>
              <Button variant="soft" color="neutral" endDecorator={<KeyboardArrowRight />}>
                Sign Up
              </Button>
            </CardActions>
          </Card>

          {/* Standard Plan */}
          <Card
            className="pricing-card"
            size="lg"
            variant="solid"
            color="neutral"
            invertedColors
            sx={{ bgcolor: 'black', minWidth: 300, maxWidth: 400 }}
          >
            <Chip size="sm" variant="outlined">
              STANDARD
            </Chip>
            <Typography level="h2">Standard</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                3 Custom Website Designs
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Mobile & Tablet Optimization
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Advanced SEO Setup
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Blog Integration
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Social Media Integration
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                3 Revisions
              </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Typography level="title-lg" sx={{ mr: 'auto' }}>
                ₹35,000{' '}
                <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                  / one-time
                </Typography>
              </Typography>
              <Button endDecorator={<KeyboardArrowRight />}>Sign Up</Button>
            </CardActions>
          </Card>

          {/* Premium Plan */}
          <Card
            className="pricing-card"
            size="lg"
            variant="outlined"
            sx={{ minWidth: 300, maxWidth: 400 }}
          >
            <Chip size="sm" variant="outlined" color="neutral">
              PREMIUM
            </Chip>
            <Typography level="h2">Premium</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Custom Websites
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Full Mobile & Desktop Optimization
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Full SEO Package with Analytics
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                E-commerce Integration
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Ongoing Support & Maintenance
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Revisions
              </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Typography level="title-lg" sx={{ mr: 'auto' }}>
                ₹80,000{' '}
                <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                  / one-time
                </Typography>
              </Typography>
              <Button variant="soft" color="neutral" endDecorator={<KeyboardArrowRight />}>
                Contact Us
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
