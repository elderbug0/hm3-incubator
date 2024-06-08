'use client';

import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../lib/api';
import withAuth from '../lib/withAuth';
import ThemeToggle from '../components/ThemeToggle';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-4">{post.body.substring(0, 100)}...</p>
            <a href={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuth(HomePage);
