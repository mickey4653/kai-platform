import MainAppLayout from '@/layouts/MainAppLayout';
import DiscoverLibraryUI from '@/templates/Chat/DiscoveryLibrary/DiscoveryLibraryUI';

const KaiChat = () => {
  return <DiscoverLibraryUI />;
};

KaiChat.getLayout = function getLayout(page) {
  return <MainAppLayout>{page}</MainAppLayout>;
};

export default KaiChat;
