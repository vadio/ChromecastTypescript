
declare module cast.receiver.media {
	export interface Volume {
		level: number;
		muted: bool;
	}
	
	export interface Track {
		customData: Object;
		language: string;
		name: string;
		subtype: string;
		trackContentId: string;
		trackContentType: string;
		trackId: number;
		type: string; // see cast.receiver.media.TrackType enumeration in Google's docs
	}
	
	export interface TextTrackStyle {
		backgroundColor: string;
		customData: Object;
		edgeColor: string;
		edgeType: string; // see cast.receiver.media.TextTrackEdgeType in Google's docs
		fontFamily: string;
		fontGenericFamily: string; // see cast.receiver.media.TextTrackFontGenericFamily in Google's docs
		fontScale: number;
		fontStyle: string; // see cast.receiver.media.TextTrackFontStyle in Google's docs
		foregroundColor: string;
		windowColor: string;
		windowRoundedCornerRadius: number;
		windowType: string; // see cast.receiver.media.TextTrackWindowType in Google's docs
	}
	
	export interface TracksInfo {
		activeTrackIds: number[];
		textTrackStyle: TextTrackStyle;
		tracks: Track[];
	}
	
	export interface Player {
		/**
		 * Allows to edit the tracks information (active tracks and style).
		 * @param data The track information to use.
		 */
		editTracksInfo(data: cast.receiver.media.TracksInfo): void;
		
		/**
		 * Provides the current time in seconds.
		 * @return The current time in seconds.
		 */
		getCurrentTimeSec(): number;
		
		/**
		 * Provides the duration of the media in seconds.
		 * @return The duration in seconds.
		 */
		getDurationSec(): number;
		
		/**
		 * Provides the state of the player.
		 * @return The player state. See cast.receiver.media.PlayerState in
		 *		Google's docs.
		 */
		getState(): string;
		
		/**
		 * Provides the stream volume.
		 * @return The player volume.
		 */
		getVolume(): cast.receiver.media.Volume;
		
		/**
		 * Loads content to be played.
		 * @param contentId The content ID. Should be treated as an opaque string.
		 * @param autoplay Whether the content should play after load.
		 * @param opt_time (default 0) The expected current time after load (in seconds).
		 * @param opt_tracksInfo (default null) The tracks information.
		 * @param opt_onlyLoadTracks (default false) If true, only the tracks will be loaded, the application will be responsible to call load. If it is true, opt_tracksInfo should be provided.
		 */
		load(contentId: string, autoplay: bool, opt_time: number, opt_tracksInfo: cast.receiver.media.TracksInfo, opt_onlyLoadTracks: bool): void;
		
		/**
		 * Pauses playback.
		 */
		pause(): void;
		
		/**
		 * Starts playback.
		 */
		play(): void;
		
		/**
		 * Registers an API that the player should call when the media has ended.
		 * @param endedCallback The callback to call upon when the video ends.
		 */
		registerEndedCallback(endedCallback: Function): void;
		
		/**
		 * Registers an API that the player should call when there is an error.
		 * @param errorCallback The callback to call upon when an error occurs.
		 */
		registerErrorCallback(errorCallback: Function): void;
		
		/**
		 * Registers an API that the player should call when load is complete.
		 * @param loadCallback The callback to call upon when the player has
		 *		loaded content.
		 */
		registerLoadCallback(loadCallback: Function): void;
		
		/**
		 * Resets the player. After this call the player state should be IDLE (no media loaded).
		 */
		reset(): void;
		
		/**
		 * Sets playback to start at a new time position.
		 * @param time number of seconds to seek to.
		 * @param opt_resumeState (default null) The expected state after seek. See 
		 *		cast.receiver.media.SeekResumeState in Google's docs.
		 */
		seek(time: number, opt_resumeState: string): void;
		
		/**
		 * Sets the stream volume.
		 * @param volume The new volume.
		 */
		setVolume(volume: cast.receiver.media.Volume): void;
		
		unregisterEndedCallback(): void;
		
		unregisterErrorCallback(): void;
		
		unregisterLoadCallback(): void;
	}
}