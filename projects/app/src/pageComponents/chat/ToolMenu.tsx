import React from 'react';
import { useChatBox } from '@/components/core/chat/ChatContainer/ChatBox/hooks/useChatBox';
import type { ChatItemType } from '@fastgpt/global/core/chat/type.d';
import { IconButton } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import MyIcon from '@fastgpt/web/components/common/Icon';
import MyMenu from '@fastgpt/web/components/common/MyMenu';
import { useContextSelector } from 'use-context-selector';
import { ChatContext } from '@/web/core/chat/context/chatContext';
import { ChatItemContext } from '@/web/core/chat/context/chatItemContext';
import { useRouter } from 'next/router';
import { useConfirm } from '@fastgpt/web/hooks/useConfirm';

const ToolMenu = ({ history }: { history: ChatItemType[] }) => {
  const { t } = useTranslation();
  const { onExportChat } = useChatBox();

  const onChangeChatId = useContextSelector(ChatContext, (v) => v.onChangeChatId);
  const chatData = useContextSelector(ChatItemContext, (v) => v.chatBoxData);
  const onClearHistory = useContextSelector(ChatContext, (v) => v.onClearHistories);

  const { openConfirm, ConfirmModal } = useConfirm({
    title: '操作确认',
    content: '确认删除所有聊天记录？' // 修改了确认内容
  });

  return (
    <>
      <MyMenu
        Button={
          <IconButton
            icon={<MyIcon name={'more'} w={'14px'} p={2} />}
            aria-label={''}
            size={'sm'}
            variant={'whitePrimary'}
          />
        }
        menuList={[
          {
            children: [
              {
                icon: 'core/chat/chatLight',
                label: t('common:core.chat.New Chat'),
                onClick: () => {
                  onChangeChatId();
                }
              }
            ]
          },
          {
            children: [
              // {
              //   icon: 'core/app/appApiLight',
              //   label: `HTML ${t('common:Export')}`,
              //   onClick: () => onExportChat({ type: 'html', history })
              // },
              {
                icon: 'file/markdown',
                label: `Markdown ${t('common:Export')}`,
                onClick: () => onExportChat({ type: 'md', history })
              }

              // {
              //   icon: 'core/chat/export/pdf',
              //   label: `PDF ${t('common:Export')}`,
              //   onClick: () => onExportChat({ type: 'pdf', history })
              // }
            ]
          },
          {
            children: [
              {
                icon: 'delete',
                label: '清除历史对话',
                onClick: openConfirm(() => {
                  onClearHistory();
                })
              }
            ]
          }
        ]}
      />
      <ConfirmModal />
    </>
  );
};

export default ToolMenu;
