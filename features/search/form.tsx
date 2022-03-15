import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import type {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn
} from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";
import {
  useSafeAreaFrame,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";

const styles = StyleSheet.create({
  input: {
    lineHeight: 20,
    flex: 1,
    borderRadius: 8
  }
});

function Form(props: BottomTabHeaderProps): JSX.Element {
  const theme = useTheme<Theme>();
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
  const { control } = useForm<{
    search: string;
  }>({
    defaultValues: { search: "" }
  });

  return (
    <Box
      height={headerHeight}
      flexDirection="row"
      paddingHorizontal="m"
      paddingBottom="s"
      style={[
        props.options.headerStyle,
        {
          paddingTop: insets.top
        }
      ]}
    >
      <Box
        pointerEvents="none"
        position="absolute"
        zIndex={1}
        style={{
          bottom: theme.spacing.s + 7,
          left: theme.spacing.m * 2
        }}
      >
        <Icon
          name="search-outline"
          size={18}
          color={theme.colors.headerPlaceholderText}
        />
      </Box>
      <Controller
        control={control}
        name="search"
        render={({
          field: { onChange, onBlur, value }
        }: {
          field: ControllerRenderProps<
            {
              search: string;
            },
            "search"
          >;
          fieldState: ControllerFieldState;
          formState: UseFormStateReturn<{
            search: string;
          }>;
        }): JSX.Element => (
          <TextInput
            placeholder="Enter a search term"
            placeholderTextColor={theme.colors.headerPlaceholderText}
            value={value}
            style={[
              styles.input,
              {
                // ...theme.textVariants.body,
                fontFamily: theme.textVariants.body.fontFamily,
                fontSize: theme.textVariants.body.fontSize,
                color: theme.colors.headerInputText,
                backgroundColor: theme.colors.headerInputBackground,
                paddingLeft: 25 + theme.spacing.s * 2
              }
            ]}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
    </Box>
  );
}

export default Form;
