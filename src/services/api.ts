const API_BASE = import.meta.env.DEV ? '/api' : process.env.REACT_APP_API_URL || '/api';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export const apiService = {
  async getHealth() {
    try {
      const response = await fetch(`${API_BASE}/health`);
      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      return { status: 'Backend offline' };
    }
  },

  async getSchemes() {
    try {
      const response = await fetch(`${API_BASE}/schemes`);
      if (!response.ok) throw new Error('Failed to fetch schemes');
      return await response.json();
    } catch (error) {
      console.error('Error fetching schemes:', error);
      return [];
    }
  },

  async getScheme(id: string) {
    try {
      const response = await fetch(`${API_BASE}/schemes/${id}`);
      if (!response.ok) throw new Error('Scheme not found');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching scheme ${id}:`, error);
      return null;
    }
  },

  async checkEligibility(profile: any) {
    try {
      const response = await fetch(`${API_BASE}/eligibility`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile }),
      });
      if (!response.ok) throw new Error('Eligibility check failed');
      return await response.json();
    } catch (error) {
      console.error('Error checking eligibility:', error);
      return { error: 'Eligibility check failed' };
    }
  },
};
