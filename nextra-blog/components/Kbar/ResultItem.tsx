import * as React from "react";
import { ActionImpl,useRegisterActions} from "kbar";
import { createStyles, UnstyledButton, Group, Text, Image, Center, Badge, rem, ActionIcon, Kbd } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  action: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: `${rem(10)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    }),

    '&[data-hovered]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    },
  },
}));
// Forward Ref 
const ResultItem = React.forwardRef(

  function ResultItem({ action, active }: { action: ActionImpl; active: boolean; }, ref: React.Ref<HTMLDivElement>) {

    const { classes } = useStyles();

    return (
      <div ref={ref} key={action.id} style={{ backgroundColor: "white", padding: "auto 10px", }}>
        <UnstyledButton
          className={classes.action}
          tabIndex={-1}
          onMouseDown={(event) => event.preventDefault()}
        >
          <Group noWrap>
            {action.icon && (
              <Center>
                <ActionIcon>
                  {action.icon}
                </ActionIcon>
              </Center>
            )}

            <div style={{ flex: 1 }}>
              <Text>{action.name}</Text>

              {action.keywords && (
                <Text tt="capitalize" color="dimmed" size="xs">
                  {action.keywords}
                </Text>
              )}
            </div>

            {action.shortcut && action.shortcut.map(item => <Kbd>{item}</Kbd>)}

          </Group>
        </UnstyledButton>
      </div>
    );
  })

export default ResultItem


//   < div ref = { ref } className = { active? `px-3 py-2 leading-none rounded text-violet11 flex items-center justify-between bg-violet4` : `px-3 py-2 leading-none rounded text-violet11 flex items-center justify-between hover:bg-violet4`} >
//
// <header className="flex items-center">
//   {action.icon}
//   <div className="rounded flex flex-col items-start justify-center relative select-none outline-none hover:bg-violet4">
//     <h1 className="text-lg text-violet11"> {action.name} </h1>
//     <p className="text-md text-violet9 py-1"> {action.subtitle} </p>
//   </div>
// </header>
//
//   <div className="text-[15px] leading-none text-violet11 rounded flex justify-between items-center relative select-none outline-none hover:bg-violet4">
//     {action.shortcut?.length ? (
//       <div
//         aria-hidden
//         style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
//       >
//         {action.shortcut.map((sc) => (
//           <kbd
//             key={sc}
//             style={{
//               padding: "4px 6px",
//               background: "rgba(0 0 0 / .1)",
//               borderRadius: "4px",
//               fontSize: 14,
//             }}
//           >
//             {sc}
//           </kbd>
//         ))}
//       </div>
//     ) : null}
// </div>
// </div >
