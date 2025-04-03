import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">CV/Resume</h1>
      <div className="space-y-8">
        {/* This is a placeholder CV component that would normally contain resume information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-muted-foreground">
            Example professional with experience in building interactive web applications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'WebGL', 'Tailwind CSS', 'GLSL', 'Vite'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
