'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { defaultSettings, SiteSettings } from './settings-service';

// Server-only function to read and parse the settings from markdown file
async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const filePath = path.join(process.cwd(), 'content/settings/site.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return data as SiteSettings;
  } catch (error) {
    console.error('Error loading site settings:', error);
    
    // Return default values if file doesn't exist or can't be parsed
    return defaultSettings;
  }
}

// This is the function exported for use in server components
export async function fetchSiteSettings(): Promise<SiteSettings> {
  try {
    return await getSiteSettings();
  } catch (error) {
    console.error('Error in fetchSiteSettings:', error);
    return defaultSettings;
  }
}