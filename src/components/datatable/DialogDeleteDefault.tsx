import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"


interface Props {
    id: string;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    onDelete: (id: string) => void;
}

  export const DialogDeleteDefault = ( { id, isOpen, setIsOpen, onDelete } : Props ) => {

    return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar { id }</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button variant="destructive" onClick={ () => onDelete(id) }>Continue</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }