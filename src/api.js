const BASE_URL = 'http://localhost:3001';

const request = async (url, options) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  return request('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const signup = async (email, password) => {
  return request('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const fetchTasks = async (token) => {
  return request('/tasks', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const createTask = async (task, token) => {
  return request('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });
};

export const updateTaskStatus = async (taskId, status, token) => {
  return request(`/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
};
