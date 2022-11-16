import boto3
dynamodb = boto3.resource('dynamodb')
""""" O código Python em  um módulo obtém acesso ao código em outro
módulo pelo processo de importação. A instrução import
combina duas operações que procura o módulo nomeado e, em seguida, vincula os resultados dessa pesquisa
a um nome no escopo local"""""
table = dynamodb.create_table(
 TableName='user',
 KeySchema=[
     {
         'AttributeName': 'id',
         'KeyType': 'HASH'    #Partition Key Only
     }
 ],
 AttributeDefinitions=[
     {
         'AttributeName': 'id',
         'AttributeType': 'S'
     }
 ],
 ProvisionedThroughput={
     'ReadCapacityUnits': 1,
     'WriteCapacityUnits': 1
 },
)
