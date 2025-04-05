import QRCode from "react-qr-code";

export const QRCodeForURI = ({
  uri,
  size,
  style,
  bgColor,
}: {
  uri: string;
  size: number;
  style: React.CSSProperties;
  bgColor: string;
}) => {
  return <QRCode value={uri} size={size} style={style} bgColor={bgColor} />;
};
