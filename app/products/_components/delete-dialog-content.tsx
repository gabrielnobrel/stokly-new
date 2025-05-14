import { deleteProduct } from "@/app/_actions/product/delete-product";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface DeleteProducDialogContentProps {
  productId: string;
}

const DeleteProductDialogContent = ({
  productId,
}: DeleteProducDialogContentProps) => {
  const { execute: executeDeleteProduct } = useAction(deleteProduct, {
    onSuccess: () => {
      toast.success("Produto excluído com sucesso!");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao excluir o produto.");
    },
  });

  const handleContinueClick = () => {
    // try {
    //   await deleteProduct({ id: productId });
    //   toast.success("Produto excluído com sucesso!");
    // } catch (error) {
    //   console.error("Error deleting product:", error);
    //   toast.error("Erro ao excluir o produto. Tente novamente.");
    // }

    executeDeleteProduct({ id: productId });
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a exluir este produto. Esta ação não pode ser
          desfeita. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteProductDialogContent;
