import React, { useState } from 'react';
import Tag from '../Tag';

export default function Categories() {
  const [categories, setCategories] = useState(['html', 'css', 'javascript', 'react', 'nodejs', 'php', 'c#', 'c++', 'anjular', 'vuejs', 'ruby', 'security']);
  return (
    <div className="categories">
      {categories.map(cat => <Tag key={cat} name={cat} />)}
    </div>
  )
}
