React Rowing Blades is a library of SVG illustrations (react components) of rowing clubs' blades.

Install from NPM

```bash
npm install --save-dev react-rowing-blades
```

Import it into your code:

```javascript static
import Blade from 'react-rowing-blades';

const Example = () => <Blade size={200} club="cam" />;
```

List all valid rowing clubs:

```javascript
const { clubs, shortNames, names } = require('../src/');

<div>
  <h1>Cambridge</h1>

  <table>
    <thead>
      <tr>
        <th>Blade</th>
        <th>id</th>
        <th>Short name</th>
        <th>Full name</th>
      </tr>
    </thead>
    <tbody>
      {clubs.cambridge.map(club => (
        <tr key={club}>
          <td>
            <Blade size={30} club={club} />
          </td>
          <td>
            <code>{club}</code>
          </td>
          <td>{shortNames.cambridge[club]}</td>
          <td>{names.cambridge[club]}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1>Oxford</h1>

  <table>
    <thead>
      <tr>
        <th>Blade</th>
        <th>id</th>
        <th>Short name</th>
        <th>Full name</th>
      </tr>
    </thead>
    <tbody>
      {clubs.oxford.map(club => (
        <tr key={club}>
          <td>
            <Blade size={30} club={club} />
          </td>
          <td>
            <code>{club}</code>
          </td>
          <td>{shortNames.oxford[club]}</td>
          <td>{names.oxford[club]}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1>United Kingdom</h1>

  <table>
    <thead>
      <tr>
        <th>Blade</th>
        <th>id</th>
        <th>Short name</th>
        <th>Full name</th>
      </tr>
    </thead>
    <tbody>
      {clubs.uk.map(club => (
        <tr key={club}>
          <td>
            <Blade size={30} club={club} />
          </td>
          <td>
            <code>{club}</code>
          </td>
          <td>{shortNames.uk[club]}</td>
          <td>{names.uk[club]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>;
```

```javascript static
import { clubs, shortNames, names } from 'react-rowing-blades';

const List = () => (
  <div>
    <h1>Cambridge</h1>

    <table>
      <thead>
        <tr>
          <th>Blade</th>
          <th>id</th>
          <th>Short name</th>
          <th>Full name</th>
        </tr>
      </thead>
      <tbody>
        {clubs.cambridge.map(club => (
          <tr key={club}>
            <td>
              <Blade size={30} club={club} />
            </td>
            <td>
              <code>{club}</code>
            </td>
            <td>{shortNames.cambridge[club]}</td>
            <td>{names.cambridge[club]}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h1>Oxford</h1>

    <table>
      <thead>
        <tr>
          <th>Blade</th>
          <th>id</th>
          <th>Short name</th>
          <th>Full name</th>
        </tr>
      </thead>
      <tbody>
        {clubs.oxford.map(club => (
          <tr key={club}>
            <td>
              <Blade size={30} club={club} />
            </td>
            <td>
              <code>{club}</code>
            </td>
            <td>{shortNames.oxford[club]}</td>
            <td>{names.oxford[club]}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h1>United Kingdom</h1>

    <table>
      <thead>
        <tr>
          <th>Blade</th>
          <th>id</th>
          <th>Short name</th>
          <th>Full name</th>
        </tr>
      </thead>
      <tbody>
        {clubs.uk.map(club => (
          <tr key={club}>
            <td>
              <Blade size={30} club={club} />
            </td>
            <td>
              <code>{club}</code>
            </td>
            <td>{shortNames.uk[club]}</td>
            <td>{names.uk[club]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
```
