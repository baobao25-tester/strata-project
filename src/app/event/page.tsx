'use client';

import { useEffect, useState } from 'react';

export default function EventPage() {
  const [eventsHtml, setEventsHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        setEventsHtml(html);
      } catch (err: any)
 {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error loading events: {error}</p>;
  }

  return (
    <div>
      {/* You would typically include your main layout components here */}
      {/* For example: <Layout> or <MainContentArea> */}

      {/* This div will dangerously set the HTML fetched from the PHP API */}
      {/* WARNING: Ensure the PHP output is trusted to avoid XSS vulnerabilities */}
      <div dangerouslySetInnerHTML={{ __html: eventsHtml }} />

      {/* Close your layout components if they were opened above */}
      {/* For example: </MainContentArea> or </Layout> */}
    </div>
  );
} 