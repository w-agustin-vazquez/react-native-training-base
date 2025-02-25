// Taked from: https://github.com/facebook/react-native/issues/31697#issuecomment-860447695
// Solve "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation"
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { FlatListProps, FlatList as NativeFlatList, View } from 'react-native';

// Custom FlatList that doesnt try to virtualize when scrollEnabled={false}
// Do this to avoid "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation" error in console
export default function FlatListWrapper<ItemT>(props: FlatListProps<ItemT>) {
  if (props.scrollEnabled === false) {
    return (
      <View style={props.style}>
        {!!props.ListHeaderComponent && !!props.data && props.data.length > 0 && props.ListHeaderComponent}
        {!!props.ListEmptyComponent && (!props.data || props.data.length === 0) && props.ListEmptyComponent}
        {!!props.data &&
          props.data.map((item: any, index) => (
            <View key={props.keyExtractor ? props.keyExtractor(item, index) : `${index}`}>
              {!!props.renderItem &&
                props.renderItem({
                  item,
                  index,
                  separators: {
                    highlight: () => null,
                    unhighlight: () => null,
                    updateProps: (select: 'leading' | 'trailing', newProps: any) => null
                  }
                })}
              {!!props.ItemSeparatorComponent &&
                !!props.data &&
                index < props.data.length - 1 &&
                typeof props.ItemSeparatorComponent === 'function' &&
                (props.ItemSeparatorComponent as any)()}
            </View>
          ))}
        {!!props.ListFooterComponent && !!props.data && props.data.length > 0 && props.ListFooterComponent}
      </View>
    );
  }
  return <NativeFlatList {...props} />;
}

/* eslint-enable @typescript-eslint/no-unused-vars */
