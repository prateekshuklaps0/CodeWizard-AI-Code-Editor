import * as css from "../Styles/NavbarStyles";
import Logo from "../Data/code.webp";

import {
  Box,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  IconButton,
  Progress,
  Button,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import {
  GoRepoForked as RepoIconOutline,
  GoFile as FileIconOutline,
} from "react-icons/go";
import {
  FaFolderOpen as FolderIconFilled,
  FaRegFolderOpen as FolderIconOutline,
  FaFile as FileIconFilled,
  FaGithub as GithubIconFilled,
} from "react-icons/fa";
import { IoIosSearch as SearchIcon } from "react-icons/io";
import { MdClose as CloseIcon } from "react-icons/md";
import {
  FileClickReq,
  FolderClickReq,
  GetRepoPaths,
  SearchGithubUser,
} from "../Data/Action";
import {
  CODEINPCHANGE,
  Context,
  HIDE_TOGGLE_TO_FILE,
  SHOW_REPO_TOGGLE,
} from "../Data/Context";
import Particle from "./Particles";

const Navbar = ({ isBelow480px }: any) => {
  const {
    dispatch,
    loadingImport,
    errorImport,
    reposList,
    importMessage,
    currentPath,
    contentsArr,
    repoLoading,
    toggleToFile,
    fetchedCodeData,
    downloadFileLink,
    clikedFileName,
  } = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const [userNameInp, setInpVal] = useState("");
  const [currRepoName, setCurrRepoName] = useState("");
  const [downloadLoading, setDownloadLoading] = useState(false);

  // Submit Username Search
  const userNameSubmit = async (e: any) => {
    e.preventDefault();
    if (!loadingImport) {
      SearchGithubUser(dispatch, userNameInp);
    }
  };

  // Repo Path Click handler
  const repoPathClick = (repoPath: string) => {
    if (!repoLoading) {
      GetRepoPaths(dispatch, repoPath);
    }
  };

  // Folder Click handler
  const folderClickHandler = (folderName: string) => {
    if (!repoLoading) {
      FolderClickReq(dispatch, currRepoName, folderName);
    }
  };

  // File Click handler
  const fileClickHandler = (fileName: string) => {
    if (!repoLoading) {
      FileClickReq(dispatch, currRepoName, fileName);
    }
  };

  // Download File
  const handleDownloadFile = async () => {
    setDownloadLoading(true);
    const response = await fetch(downloadFileLink);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = clikedFileName;
    link.click();
    setDownloadLoading(false);
  };

  return (
    <Box css={css.Outer}>
      <Box css={css.TopNavBox}>
        <Box css={css.Title}>
          <Image src={Logo} />
          <Box>
            <Text fontFamily="var(--megrim)">CodeWizard</Text>
            {isBelow480px && <Text css={css.SecondTitle}>AI Code Editor</Text>}
          </Box>
        </Box>
        {!isBelow480px && <Text css={css.SecondTitle}>AI Code Editor</Text>}
        <Button onClick={onOpen} css={css.ImportBtn}>
          <GithubIconFilled />
          <Text>Import</Text>
        </Button>

        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          blockScrollOnMount={true}
          initialFocusRef={initialRef}
          size={["xs", "md", "2xl", "4xl", "5xl"]}
        >
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent css={css.ModalContentCss}>
            <ModalHeader css={css.ModalHeaderCss}>
              <Text>
                <GithubIconFilled /> Import Code from Github
              </Text>
              <CloseIcon onClick={onClose} />
            </ModalHeader>

            <ModalBody>
              <form onSubmit={userNameSubmit}>
                <Input
                  ref={initialRef}
                  value={userNameInp}
                  onChange={(e) => {
                    setInpVal(e.target.value);
                    dispatch({ type: HIDE_TOGGLE_TO_FILE });
                  }}
                  placeholder="Enter Github Username"
                  required
                />
                <IconButton
                  colorScheme="teal"
                  fontSize="25px"
                  aria-label="Search User"
                  icon={<SearchIcon />}
                  type="submit"
                />
              </form>

              <Box height="200px" overflow="auto">
                {loadingImport && "Loading Username"}
                {errorImport && importMessage}
                {/* Repolist */}
                {toggleToFile ? (
                  <Box>
                    <Text>{clikedFileName}</Text>
                    <pre
                      style={{
                        padding: "16px",
                        borderRadius: "4px",
                        backgroundColor: "#313030",
                        color: "white",
                        fontFamily: "monospace",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        overflowX: "auto",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {fetchedCodeData}
                    </pre>
                  </Box>
                ) : (
                  <Box>
                    {!loadingImport &&
                    !errorImport &&
                    reposList.length == 0 &&
                    importMessage ? (
                      "No Public Repo Exists"
                    ) : (
                      <Box>
                        {repoLoading && <Progress size="xs" isIndeterminate />}

                        {!repoLoading && contentsArr.length > 0 ? (
                          <Box>
                            {contentsArr?.map(
                              (
                                contentsArrItem: any,
                                contentsArrInd: number
                              ) => (
                                <Box
                                  onClick={() =>
                                    contentsArrItem?.type == "dir"
                                      ? folderClickHandler(
                                          contentsArrItem?.path
                                        )
                                      : fileClickHandler(contentsArrItem?.path)
                                  }
                                  border="1px solid grey"
                                  m="15px"
                                  p="5px 10px"
                                  display="flex"
                                  gap="7px"
                                  key={contentsArrItem?.sha + contentsArrInd}
                                >
                                  {contentsArrItem?.type == "dir" ? (
                                    <FolderIconOutline />
                                  ) : (
                                    <FileIconOutline />
                                  )}
                                  <Text>{contentsArrItem?.name}</Text>
                                </Box>
                              )
                            )}
                          </Box>
                        ) : (
                          <Box>
                            {reposList?.map(
                              (repoListItem: any, repoListInd: number) => (
                                <Box
                                  key={repoListItem?.id + repoListInd}
                                  border="1px solid grey"
                                  m="15px"
                                  p="5px 10px"
                                  display="flex"
                                  gap="7px"
                                  onClick={(e: any) => {
                                    e.stopPropagation();
                                    setCurrRepoName(repoListItem?.name);
                                    repoPathClick(repoListItem?.name);
                                  }}
                                >
                                  <RepoIconOutline />
                                  <Text>{repoListItem?.name}</Text>
                                </Box>
                              )
                            )}
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </ModalBody>

            <ModalFooter>
              {toggleToFile && (
                <Box>
                  <button onClick={handleDownloadFile} type="button">
                    {downloadLoading ? "Downloading" : "Download File"}
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: CODEINPCHANGE,
                        payload: fetchedCodeData,
                      });
                      onClose();
                    }}
                    type="button"
                  >
                    Import Code
                  </button>
                </Box>
              )}
              <button
                onClick={(e: any) => {
                  dispatch({ type: SHOW_REPO_TOGGLE });
                  userNameSubmit(e);
                }}
                type="button"
              >
                Home
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Navbar;
