import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export const BottomHomeIcon = (props: SvgProps & { iconColor?: string }) => (
  <Svg width={24} height={24} viewBox="0 0 0.48 0.48" fill={props?.iconColor || 'white'} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m0.251 0.041 0.191 0.174 -0.021 0.021L0.39 0.209v0.196l-0.015 0.015h-0.09l-0.015 -0.015v-0.105H0.21v0.105l-0.015 0.015h-0.09l-0.015 -0.015V0.209L0.06 0.236l-0.021 -0.021 0.19 -0.174zM0.12 0.182v0.208h0.06v-0.105l0.015 -0.015h0.09l0.015 0.015v0.105h0.06V0.182L0.24 0.073z"
    />
  </Svg>
);

export const SettingIcon = (props: SvgProps & { iconColor?: string }) => (
  <Svg width={27} height={28} viewBox="0 0 27 28" fill="none" {...props}>
    <Circle cx={13} cy={14} r={4} stroke={props?.iconColor || 'white'} strokeWidth={2} />
    <Path
      d="M3.90612 5.16033C2.55493 6.60756 1.57378 8.32503 1.00248 10.1651L3.54057 11.6212C5.38328 12.6785 5.38329 15.3215 3.54057 16.3788L1 17.8364C1.2837 18.7463 1.67313 19.6392 2.17263 20.4989C2.67212 21.3586 3.25551 22.1402 3.9066 22.8393L6.44722 21.3816C8.28993 20.3244 10.5933 21.6459 10.5933 23.7604V26.6729C12.4825 27.1012 14.4698 27.1156 16.4067 26.6764L16.4067 23.7605C16.4067 21.6461 18.7101 20.3245 20.5528 21.3817L23.0939 22.8397C24.4451 21.3924 25.4262 19.675 25.9975 17.835L23.4594 16.3787C21.6166 15.3215 21.6166 12.6784 23.4594 11.6212L26 10.1635C25.7163 9.25365 25.3269 8.3608 24.8274 7.50109C24.3279 6.64134 23.7445 5.85976 23.0934 5.16065L20.5528 6.61828C18.7101 7.67551 16.4067 6.35397 16.4067 4.23951V1.32712C14.5175 0.898761 12.5302 0.884411 10.5933 1.32364L10.5933 4.23948C10.5933 6.35394 8.28993 7.67548 6.44722 6.61825L3.90612 5.16033Z"
      stroke={props?.iconColor || 'white'}
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </Svg>
);

export const LogoutIcon = (props: SvgProps & { iconColor?: string }) => (
  <Svg width={24} height={24} viewBox="0 0 0.45 0.45" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.03 0.03h0.21v0.03H0.06v0.33h0.18v0.03H0.03zm0.296 0.094 0.1 0.1 -0.1 0.108 -0.022 -0.02L0.371 0.24H0.12V0.21h0.249l-0.064 -0.064z"
      fill={props?.iconColor || '#000000'}
    />
  </Svg>
);
