# Documentation du serveur Miam

# Uri de base du serveur: *https://miam-server.vercel.app/*

## Côté client:

    - meals: ** "/miam" **:
        - GET ** "/meals" **: récupérer tout les plats
        - GET ** "/meals/:mealId" **: récupérer 1 plat avec son ID

    - order: ** "/miam/oder"
        - POST ** "/" **: envoyer sa commande

## Côté admin:

    - administration: ** "/miam/admin" **:
        - POST ** "/signup" **: créer un compte
        - POST ** "/login" **: se connecter
        - POST ** "/get-admins" **: récupérer tout les admin
        - POST ** "/create-meal/mealFamily" **: créer un nouveau plat
        - PUT ** "/modify-meal/:mealId" **: modifier un plat existant
        - DELETE ** "/delete-meal/:mealId" **: supprimer un plat existant
        - DELETE ** "/delete-all-meal" **: supprimer tout les plats

    - order: ** "/miam/order"
        - POST ** "/served-order" **: envoyer une commande dans la section envoyé
        - GET ** "/get-orders" **: récupérer toutes les commandes
        - GET ** "/get-one-order/:orderId" **: récupérer une commande avec son ID
        - GET ** "/get-served-orders" **: récupérer toute les commandes servies (pour un historique)
        - GET ** "/get-served-orders/:orderId" **: récupérer une commande servie avec son ID
        - DELETE ** "/delete-order/:orderId" **: supprimer une commande
        - DELETE ** "/delete-served-order" **: supprimer une commande servie avec son ID
