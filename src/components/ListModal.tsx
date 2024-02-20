import {
  Button,
  Chip,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { IListModalProps } from "../types/Types";

function ListModal(props: PropsWithChildren<IListModalProps>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.title}
              </ModalHeader>
              <ModalBody>
                {props.image ? (
                  <div>
                    <Image src={props.image} />
                    <Divider />
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex flex-col gap-2">
                  {props.bullets.map((bullet) => (
                    <div>• {bullet}</div>
                  ))}
                </div>
                <Divider />
                <p className="text-md">Skills</p>
                <div className="flex flex-row flex-wrap gap-2">
                  {props.skills.map((skill) => (
                    <Chip color="primary" variant="shadow">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button
        variant="shadow"
        onClick={onOpen}
        size={props.buttonSize ? props.buttonSize : "sm"}
        radius="full"
        className="bg-slate-200 text-slate-700"
      >
        More Info
      </Button>
    </div>
  );
}

export default ListModal;
