import React from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  enabled?: boolean;
  onPress: () => void;
  loading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
      enabled={enabled}
      color={color ? color : theme.colors.main}
      onPress={onPress}
    
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
