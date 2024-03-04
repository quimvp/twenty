/* eslint-disable @nx/workspace-no-hardcoded-colors */
const createNewButton = (
  text: string,
  onClickHandler: () => void,
): HTMLDivElement => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  span.textContent = text;
  img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACb0lEQVR4nO2VO4taQRTHr3AblbjxEVlwCwVhg7BoqqCIjy/gAyyFWNlYBOxsfH0KuxgQGwXRUkGuL2S7i1barGAgiwbdW93SnGOc4BonPiKahf3DwXFmuP/fPM4ZlvmlTxAhCBdzHnEQWYiv7Mr4C3NeuVYhQYDPzOUUQgDLBQGcLHNhvQK8DACPx8PTxiqVyvISG43GbyaT6Qfpn06n0m63e/tPAPF4vJ1MJu8kEsnWTCkWi1yr1RKGw+GDRqPBOTfr44vFQvD7/Q/lcpmaaVQAr9fLp1IpO22c47hGOBz+MB6PH+Vy+VYDAL8qlUoGtVotzOfzq4MAgsHgE/6KojiQyWR/bKVSqbSszHFM8Pl8z1YK48JsNltCOBwOnrYLO+8AAIjb+nHbycoTiUQfDJ7tFq4YAHiVSmXBxcD41u8flQU8z7fhzO0r83atVns3Go3u9Xr9x0O/RQXo9/tsIBBg6vX606a52Wz+bZ7P5/WwG29gxSJzhKgA6XTaDoFNF+krFAocmC//4yWEcSf2wTm7mCO19xFgSsKOLI16vV7b7XY7mRNoLwA0JymJ5uQIzgIAuX5PzDElT2m+E8BqtQ4ymcx7Yq7T6a6ZE4sKgOadTucaCwkxp1UzlEKh0GDxIXOwDWHAdi6Xe3swQDQa/Q7mywoolUpvsaptymazDWKxmBHTlWXZm405BFZoNpuGgwEmk4mE2SGtVivii4f1AO7J3ZopkQCQj7Ar1FeRChCJRJzVapX6DKNIfSc1Ax+wtQWQ55h6bH8FWDfYV4fO3wlwDr0C/BcADYiTPCxHqIEA2QsCZAkAKnRGkMbKN/sTX5YHPQ1e7SkAAAAASUVORK5CYII=';
  img.height = 16;
  img.width = 16;
  img.alt = 'Twenty logo';

  div.appendChild(img);
  div.appendChild(span);

  // Write universal styles for the button
  const divStyles = {
    border: '1px solid black',
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'center',
    width: '15rem',
    cursor: 'pointer',
    height: '32px',
  };

  Object.assign(div.style, divStyles);

  // // Apply common styles to the button.
  // Object.assign(buttonDiv.style, buttonDivStyles);

  // // Apply common styles to specifc states of a button.
  // newButton.addEventListener('mouseenter', () => {
  //   const hoverStyles = {
  //     backgroundColor: '#5e5e5e',
  //     borderColor: '#5e5e5e',
  //   };
  //   Object.assign(newButton.style, hoverStyles);
  // });

  // newButton.addEventListener('mouseleave', () => {
  //   Object.assign(newButton.style, buttonStyles);
  // });

  // Handle the click event.
  div.addEventListener('click', async () => {
    const { apiKey } = await chrome.storage.local.get('apiKey');

    // If an api key is not set, the options page opens up to allow the user to configure an api key.
    if (!apiKey) {
      chrome.runtime.sendMessage({ action: 'openOptionsPage' });
      return;
    }

    // Update content during the resolution of the request.
    span.textContent = 'Saving...';

    // Call the provided onClickHandler function to handle button click logic
    onClickHandler();
  });

  return div;
};

export default createNewButton;
