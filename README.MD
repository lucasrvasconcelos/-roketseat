Abrir teminal _Bash

Iniciar projeto git.

 # git init 

 # git add . 
    ->    (O "." indica que irá adicionar todos os arquivos modificados)

 # git commit -m "Descrição"

 # git remote add origin https://github.com/lucasrvasconcelos/git.git 
    ->    ("Cria  um apontamento para o repositório remoto", "Foi colocado o nome origin mas poderia ser outro")

 # git branch -M main  
    ->    (Cria e muda para a branch principal, chamada de main)
    
 # git push -u origin main  
    ->    (Envia as alterações para o repositório remoto)

 # rm -rf .git 
    -> deletar todo regositório .git do projeto