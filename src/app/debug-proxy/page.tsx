'use client';

import { useState } from 'react';

export default function DebugProxy() {
  const [testUrl, setTestUrl] = useState('/patient/home/');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testProxy = async () => {
    setLoading(true);
    setResult('Testing...');
    
    try {
      const response = await fetch(testUrl);
      const text = await response.text();
      
      setResult(`
Status: ${response.status}
Headers: ${JSON.stringify(Object.fromEntries(response.headers.entries()), null, 2)}
Content Length: ${text.length}
First 500 chars: ${text.substring(0, 500)}
      `);
    } catch (error) {
      setResult(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Proxy Debug Tool</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Proxy URLs</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Test URL:</label>
              <input
                type="text"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="/patient/home/"
              />
            </div>
            
            <button
              onClick={testProxy}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Proxy'}
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Quick Test Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setTestUrl('/patient/home/')}
              className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200"
            >
              WellProz Home
            </button>
            <button
              onClick={() => setTestUrl('/supplements/welcome/imbt')}
              className="p-3 bg-green-100 rounded-lg hover:bg-green-200"
            >
              Fullscript Platform
            </button>
            <button
              onClick={() => setTestUrl('/patient/product/33407')}
              className="p-3 bg-purple-100 rounded-lg hover:bg-purple-200"
            >
              Gut Zoomer Product
            </button>
            <button
              onClick={() => setTestUrl('/portal/test/')}
              className="p-3 bg-yellow-100 rounded-lg hover:bg-yellow-200"
            >
              Portal Test Page
            </button>
          </div>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Test Result</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
              {result}
            </pre>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">Direct External Links (for comparison)</h2>
          <div className="space-y-2">
            <a
              href="https://imbt.wellproz.com/patient/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-red-100 rounded-lg hover:bg-red-200"
            >
              Direct WellProz Link (should work)
            </a>
            <a
              href="https://us.fullscript.com/welcome/imbt"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-red-100 rounded-lg hover:bg-red-200"
            >
              Direct Fullscript Link (should work)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
