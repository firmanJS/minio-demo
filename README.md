## Minio Demo

Simple minio demo using aws s3 style and package


## How To Run
```sh
# copy environment variable
cp .env.sample .env

# build minio with docker compose
docker-compose -f minio.yml up --build
```

### Minio Setup

After completing the Minio build, open it in the browser and log in to the Minio console.
Open with your favorite browser like Chrome or Mozilla

* [Minio Console](http://localhost:9001)

login with username and password your setup in env:
```txt
username: minio // adjust it to the env you setup
password: minio1234 // adjust it to the env you setup
```

### Create New Bucket

Follow steps below:

1. Click `Bucket` tab and click create bucket button in right side :
   * Name = `belajar`
     <img width="1673" alt="Screenshot 2023-09-23 at 08 21 18" src="https://github.com/firmanJS/minio-demo/assets/5679509/7e0b4889-3660-4343-8b27-942c55be310c">
<br><br>
2. Toogle versioning info you want versioning the bucket
<img width="888" alt="Screenshot 2023-09-23 at 08 19 49" src="https://github.com/firmanJS/minio-demo/assets/5679509/c4be596e-a7a9-44b6-877d-00f0f49bcd84">
<br><br>
3. Create bucket tab then click bucket which was made earlier
<img width="1420" alt="Screenshot 2023-09-23 at 08 21 46" src="https://github.com/firmanJS/minio-demo/assets/5679509/7da8daf2-7f72-4557-8013-bdcf4c5eebbd">
<br><br>
4. Set Bucket Access policy, click the bucket name `belajar` in summary tab set access policy set the public for example case
<img width="1420" alt="Screenshot 2023-09-23 at 08 22 00" src="https://github.com/firmanJS/minio-demo/assets/5679509/f1e29808-bb53-47cf-a93f-d521c7e933a0">

### Create Access Keys

Follow steps below:

1. Click on `Access Keys` in the left menu for create an access key to your bucket storage then click  `Create access key` button.
<img width="1663" alt="Screenshot 2023-09-23 at 08 22 30" src="https://github.com/firmanJS/minio-demo/assets/5679509/15e66bf7-1b4a-4934-aa42-89ff0aaeef9a">
<br><br>
2. You will see that the default Access key and Secret key are generated then click created
<img width="1417" alt="Screenshot 2023-09-23 at 08 22 43" src="https://github.com/firmanJS/minio-demo/assets/5679509/f2439194-3c74-48e6-a01b-c0f7e3892238">
<br><br>
3. You will copy Access key and Secret key or download for backup, if your forgotten
<img width="1415" alt="Screenshot 2023-09-23 at 08 23 05" src="https://github.com/firmanJS/minio-demo/assets/5679509/dc949aa4-c8df-4e78-9c07-d51851fbaa18">
<br><br>
4. After created go back to list and click detail
<img width="1405" alt="Screenshot 2023-09-23 at 08 42 47" src="https://github.com/firmanJS/minio-demo/assets/5679509/22346e14-1e0d-4052-b159-b616fc9c3bb7">
<br><br>
5. And add rule like this you can copy in file policy.example.json, dont forget rename to your bucket definition
<img width="1421" alt="Screenshot 2023-09-23 at 08 43 16" src="https://github.com/firmanJS/minio-demo/assets/5679509/bdd3baf3-b662-4421-90c4-f9b9d767b166">


### Create Permission to Client

Follow steps below:

1. Click on `Clients` in the left menu
1. Click `Edit` button next to `demo_client`
1. Click `Roles` tab and click button `Add Role` example Role Name = access_view
1. Click `Mappers` on tab and click button `Add Builtin` checklist `client roles` and click save
1. Click `edit` `client roles` in `Token Claim Name` change roles to `permission` and click save

Now you have successfully finished the keycloak configuration for the new client application.

