const formatTrackDuration = msDuration => {
	const minutes = Math.floor(msDuration / 60000);
	const seconds = (msDuration % 60000 / 1000).toFixed(0);
	const formattedDuration = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	return formattedDuration;
};

export default formatTrackDuration;
