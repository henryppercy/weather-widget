import './WeatherWidget.scss'

function WeatherWidget() {
  return (
    <div className="square-widget">
			<div className="widget-top">
				<div>
					<h3>Portland</h3>
					<p className="weather-desc">Light rain</p>
				</div>
				<svg viewBox="0 0 44 41" fill="none" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.3654 30.1365C12.0815 30.3752 12.4684 31.1492 12.2298 31.8652L10.8631 35.9652C10.6244 36.6812 9.85046 37.0682 9.13441 36.8295C8.41836 36.5909 8.03138 35.8169 8.27006 35.1008L9.63671 31.0009C9.8754 30.2848 10.6494 29.8978 11.3654 30.1365ZM27.7653 30.1365C28.4813 30.3752 28.8683 31.1492 28.6296 31.8652L27.263 35.9652C27.0243 36.6812 26.2503 37.0682 25.5343 36.8295C24.8182 36.5909 24.4312 35.8169 24.6699 35.1008L26.0366 31.0009C26.2753 30.2848 27.0492 29.8978 27.7653 30.1365ZM18.1987 34.2365C18.9147 34.4752 19.3017 35.2491 19.063 35.9652L17.6964 40.0652C17.4577 40.7812 16.6837 41.1682 15.9677 40.9295C15.2516 40.6908 14.8647 39.9169 15.1033 39.2008L16.47 35.1008C16.7087 34.3848 17.4826 33.9978 18.1987 34.2365ZM34.5985 34.2365C35.3146 34.4752 35.7016 35.2491 35.4629 35.9652L34.0962 40.0652C33.8576 40.7812 33.0836 41.1682 32.3675 40.9295C31.6515 40.6908 31.2645 39.9169 31.5032 39.2008L32.8698 35.1008C33.1085 34.3848 33.8825 33.9978 34.5985 34.2365Z" fill="#989898" />
					<path d="M36.6409 11.0074C35.4029 4.73192 29.8714 0 23.2331 0C17.6026 0 12.7702 3.40423 10.6765 8.26376C10.312 8.22158 9.94161 8.19993 9.56658 8.19993C4.2831 8.19993 0 12.483 0 17.7665C0 23.05 4.2831 27.3331 9.56658 27.3331L35.533 27.3331C40.0617 27.3331 43.7329 23.6619 43.7329 19.1332C43.7329 14.9802 40.6456 11.5483 36.6409 11.0074ZM23.2331 2.73331C28.86 2.73331 33.4956 6.98513 34.0996 12.4504C34.1764 13.1457 34.7659 13.6707 35.4653 13.6669L35.533 13.6665L35.5365 13.6665C38.554 13.6684 40.9996 16.1152 40.9996 19.1332C40.9996 22.1523 38.5522 24.5998 35.533 24.5998L9.56658 24.5998C5.79267 24.5998 2.73331 21.5404 2.73331 17.7665C2.73331 13.9926 5.79267 10.9332 9.56658 10.9332C10.1387 10.9332 10.6926 11.0033 11.221 11.1345C11.9148 11.3069 12.6242 10.9155 12.8483 10.2366C14.2874 5.87684 18.3949 2.73331 23.2331 2.73331Z" fill="#989898" />
				</svg>
		</div>
		<div className="widget-bottom">
			<p className="current-temp">15<sup className="degrees-symbol">°</sup></p>
			<div>
				<p className="max-temp">17<sup className="degrees-symbol">°</sup></p>
				<p className="min-temp">11<sup className="degrees-symbol">°</sup></p>
			</div>
		</div>
	</div>
  )
}

export default WeatherWidget