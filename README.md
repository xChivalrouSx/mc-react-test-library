# mc-react-test-library

> React testing library as an example

[![NPM](https://img.shields.io/npm/v/mc-react-test-library.svg)](https://www.npmjs.com/package/mc-react-test-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mc-react-test-library
```

## Usage

```jsx
import { Button } from "mc-react-test-library";
import React from "react";

const App = () => {
	return (
		<Button
			text="Click Me!..."
			type="hacker"
			buttonAttributes={{
				onClick: () => {
					alert("clicked...");
				},
			}}
		/>
	);
};

export default App;
```

## License

MIT © [xChivalrouSx](https://github.com/xChivalrouSx)
