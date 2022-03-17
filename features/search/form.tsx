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
import { Platform, StyleSheet, TextInput } from "react-native";
import {
  useSafeAreaFrame,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../../libraries/theme";
import Box from "../../style-system/box";

const styles = StyleSheet.create({
  icon: { top: 1 },
  input: {
    flex: 1,
    top: 1
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
      style={[
        props.options.headerStyle,
        {
          paddingTop: insets.top
        }
      ]}
    >
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        borderRadius={8}
        paddingHorizontal="m"
        backgroundColor="headerInputBackground"
        marginBottom="s"
        marginTop={Platform.OS === "android" ? "s" : undefined}
      >
        <Icon
          name="search-outline"
          size={18}
          color={theme.colors.headerPlaceholderText}
          style={[styles.icon, { marginRight: theme.spacing.s }]}
        />
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
                  fontFamily: theme.textVariants.body.fontFamily,
                  fontSize: theme.textVariants.body.fontSize,
                  color: theme.colors.headerInputText
                }
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
      </Box>
    </Box>
  );
}

export default Form;
