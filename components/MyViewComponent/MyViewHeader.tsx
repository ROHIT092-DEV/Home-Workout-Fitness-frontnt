import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

function MyViewHeader() {
  return (
    <div>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>

      {/* Profile Icon */}
    </div>
  );
}

export default MyViewHeader;
